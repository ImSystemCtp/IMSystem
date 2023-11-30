import { ims_request, ims_users } from "@prisma/client";
import React from "react";

export interface EmailTemplateProps {
  request: ims_request;
  user: ims_users;
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  request,
  user,
}) => (
  <div className="max-w-md mx-auto p-6 bg-white border rounded-lg shadow-md">
    <h1 className="text-3xl font-bold mb-4 text-blue-600">¡Bienvenido!</h1>
    <p className="text-gray-700 text-lg mb-6">
      Te informamos que hay una nueva solicitud de tipo{' '}
      <span className="font-semibold">
        {request.req_type === 'Low' ? 'Baja' : 'Traslado'}
      </span>{' '}
      en el sistema. Por favor, accede al sistema para revisar y gestionar la solicitud.
    </p>
    <div className="bg-blue-700 text-white p-4 mb-6 rounded-md">
      <p className="text-sm font-semibold">Detalles de la Solicitud:</p>
      <ul className="list-disc pl-5">
        <li>Tipo:  {request.req_type === "Low" ? "Baja" : "Traslado"}</li>
      </ul>
    </div>
    <p className="text-gray-600 text-sm border-t pt-4 mt-4">
      ¡Gracias por usar nuestro sistema!
    </p>
    <div className="mt-6 text-sm text-gray-500">
      <p>Nombre de Usuario: {user.usu_name + ' ' + user.usu_surnames}</p>
      <p>Email: {user.usu_email}</p>
    </div>
  </div>

);

export default EmailTemplate;
