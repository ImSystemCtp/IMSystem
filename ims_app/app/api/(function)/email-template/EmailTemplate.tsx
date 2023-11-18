import { ims_request } from "@prisma/client";
import React from "react";

export interface EmailTemplateProps {
  request: ims_request;
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  request,
}) => (
  <div className="max-w-md mx-auto p-6 bg-white border rounded shadow-md">
    <h1 className="text-2xl font-bold mb-4">¡Bienvenido!</h1>
    <p className="text-gray-700 text-base mb-6">
      Te informamos que hay una nueva solicitud de tipo {request.req_type === "Low" ? "Baja" : "Traslado"} en el
      sistema. Por favor, accede al sistema para revisar y gestionar la
      solicitud.
    </p>
    <p className="text-gray-600 text-sm border-t pt-4 mt-4">
      ¡Gracias por usar nuestro sistema!
    </p>
  </div>
);

export default EmailTemplate;
