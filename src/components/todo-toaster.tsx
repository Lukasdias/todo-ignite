import { Toaster } from "react-hot-toast";

export default function TodoToaster() {
  return (
    <Toaster
      position="bottom-right"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        className: "",
        duration: 2000,
        style: {
          background: "#363636",
          color: "#fff",
        },
        success: {
          duration: 2000,
        },
        error: {
          duration: 2000,
        },
      }}
    />
  );
}
