"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { FormField } from "@/components/molecules/FormField";
import { ButtonSubmit } from "@/components/atoms/Button-submit";
import { Form } from "@/components/atoms/Form";
import { FormTitle } from "@/components/atoms/Form-title";
import { useEffect, useState } from "react";
import { IVehiclesRequest } from "@/app/core/application/dto/vehicles/vehicles-request.dto";
import { EndPointVehicles } from "@/app/core/application/models/vehicles.enum";
import { IVehicle } from "@/app/core/application/dto/vehicles/vehicles-response.dto";
import {
  ErrorResponse,
  FieldError,
} from "@/app/core/application/dto/common/error-response.dto";

const createVehicleSchema = yup.object().shape({
  make: yup.string().required("Make is required"),
  model: yup.string().required("Model is required"),
  year: yup.string().required("Year is required"),
  licensePlate: yup.string().required("License plate is required"),
  file: yup.mixed<File>(),
});

interface VehiclesFormProps {
  title: string;
  submit: string;
  itemData?: IVehiclesRequest | IVehicle;
  method: string;
}

export const VehiclesForm = ({
  title,
  submit,
  itemData,
  method = "POST",
}: VehiclesFormProps) => {
  const {
    control,
    handleSubmit,
    setError,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<IVehiclesRequest>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(createVehicleSchema),
    defaultValues: {
      make: itemData?.make || "",
      model: itemData?.model || "",
      year: itemData?.year || "",
      licensePlate: itemData?.licensePlate || "",
    },
  });

  const router = useRouter();
  const [filePreview, setFilePreview] = useState<string | null>(null);

  useEffect(() => {
    if (itemData) {
      const data = itemData as IVehicle;
      setValue("make", data.make);
      setValue("model", data.model);
      setValue("year", data.year);
      setValue("licensePlate", data.licensePlate);
      setFilePreview(data.photo);
    }
  }, [itemData, setValue]);

  const changePhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("file", file);
      setValue("file", file);
    }
  };

  const handleError = (error: unknown) => {
    const errorData = error as ErrorResponse;
    if (errorData && errorData.errors) {
      if (Array.isArray(errorData.errors) && "field" in errorData.errors[0]) {
        errorData.errors.forEach((fieldError) => {
          const { field, error } = fieldError as FieldError;
          setError(field as keyof IVehiclesRequest, { message: error });
        });
      } else {
        if ("message" in errorData.errors[0]) {
          setError("make", { message: errorData.errors[0].message });
        }
      }
    }
  };

  const createVehicle = async (data: IVehiclesRequest) => {
    console.log("creating vehicle");
    try {
      const formData = new FormData();
      formData.append("make", data.make);
      formData.append("model", data.model);
      formData.append("year", data.year);
      formData.append("licensePlate", data.licensePlate);
      const photo = getValues("file");
      if (photo) {
        formData.append("file", photo);
      }
      console.log("trying to create vehicle", data);
      const response = await fetch(EndPointVehicles.create, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        const errorData = await response.json();
        handleError(errorData);
        return;
      }
      alert("Vehicle created successfully");
      router.refresh();
    } catch (error) {
      console.log("Error in creation", error);
      handleError(error);
    }
  };

  const updateVehicle = async (data: IVehicle) => {
    try {
      console.log("editing project");

      if (!itemData) {
        throw new Error("Item data is undefined");
      }
      const response = await fetch(`${EndPointVehicles.update}/${(itemData as IVehicle).id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Error updating project");
      }
      const result = await response.json();
      router.refresh();
      console.log("project edited - form", result);
    } catch (error) {
      console.log("Error in edit project", error);
      handleError(error);
      return;
    }
  };

  const onSubmit = (data: IVehiclesRequest | IVehicle) => {
    console.log("submit data", data);
    console.log("entrando a if submit");
    if (method === "PUT" && itemData) {
      if ("id" in itemData) {
        console.log("entrando a editar");
        updateVehicle(data as IVehicle);
      }
    } else {
      console.log("entrando a crear");
      createVehicle(data as IVehiclesRequest);
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormTitle title={title} />
      <FormField<IVehiclesRequest>
        control={control}
        name="make"
        label="Make"
        type="text"
        error={errors.make}
      />
      <FormField<IVehiclesRequest>
        control={control}
        name="model"
        label="Model"
        type="text"
        error={errors.model}
      />
      <FormField<IVehiclesRequest>
        control={control}
        name="year"
        label="Year"
        type="text"
        error={errors.year}
      />
      <FormField<IVehiclesRequest>
        control={control}
        name="licensePlate"
        label="License Plate"
        type="text"
        error={errors.licensePlate}
      />

      <div className="w-full flex flex-col mb-4">
        <label className="text-sm font-medium mb-2">Vehicle Photo</label>
        <input
          type="file"
          accept="image/*"
          onChange={changePhoto}
          className="w-full p-2 border border-gray-300 rounded-xl"
        />
        {errors.file && (
          <p className="text-red-500 text-sm mt-1">{errors.file.message}</p>
        )}
        {filePreview && (
          <img
            src={filePreview}
            alt="Preview"
            className="mt-2 w-24 h-24 object-cover rounded-xl"
          />
        )}
      </div>

      <ButtonSubmit title={submit} />
    </Form>
  );
};
