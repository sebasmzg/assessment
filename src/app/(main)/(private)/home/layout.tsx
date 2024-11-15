import { ModalProvider } from "@/app/infraestructure/context/modal-context";
import AuthGuard from "../guard/AuthGuard";
import { Modal } from "@/components/molecules/Modal";
import Sidebar from "@/components/organisms/SideBar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ModalProvider>
      <AuthGuard>
        <div className="flex">
          <div><Sidebar/></div>
          <div>{children}</div>
        </div>
      </AuthGuard>
      <Modal />
    </ModalProvider>
  );
}
