INSERT INTO ims_institution (inst_name, inst_description, inst_location, inst_phone, inst_email)
VALUES ('Institución A', 'Descripción de la Institución A', 'Ubicación A', '123-456-7890', 'correo@institucionA.com');

INSERT INTO ims_locations (location_name)
VALUES ('Ubicación A');

INSERT INTO ims_registered_in (tomo, folio, asiento, inst_id)
VALUES (1, 101, 1001, 1);

INSERT INTO ims_users (usu_name, usu_surnames, usu_email, usu_role)
VALUES ('Usuario1', 'Apellidos1', 'usuario1@ejemplo.com', 'Admin');

INSERT INTO ims_laws (law_name, law_description)
VALUES ('Ley1', 'Descripción de la Ley 1');


INSERT INTO `ims_assets`(`assets_regis_location`, `assets_no`, `assets_description`, `assets_brand`, `assets_model`, `assets_series`, `assets_active`, `assets_acquisition_value`, `assets_curr_location`, `assets_invoice_number`, `assent_law_id`)
VALUES
(1, '1236451', 'Descripción del activo 1', 'Marca1', 'Modelo1', 'Serie1', 'Activo', '1000.00', 1, 12345, 1),
(1, '1236452', 'Descripción del activo 2', 'Marca2', 'Modelo2', 'Serie2', 'Activo', '1500.00', 1, 12346, NULL),
(1, '1236453', 'Descripción del activo 3', 'Marca3', 'Modelo3', 'Serie3', 'Inactivo', '750.00', 1, 12347, 1),
(1, '1236454', 'Descripción del activo 4', 'Marca4', 'Modelo4', 'Serie4', 'Activo', '2000.00', 1, 12348, NULL),
(1, '1236455', 'Descripción del activo 5', 'Marca5', 'Modelo5', 'Serie5', 'Activo', '900.00', 1, 12349, 1);
(1, '1236456', 'Descripción del activo 1', 'Marca1', 'Modelo1', 'Serie1', 'Activo', '1000.00', 1, 12345, 1),
(1, '1236457', 'Descripción del activo 2', 'Marca2', 'Modelo2', 'Serie2', 'Activo', '1500.00', 1, 12346, NULL),
(1, '1236458', 'Descripción del activo 3', 'Marca3', 'Modelo3', 'Serie3', 'Inactivo', '750.00', 1, 12347, 1),
(1, '1236459', 'Descripción del activo 4', 'Marca4', 'Modelo4', 'Serie4', 'Activo', '2000.00', 1, 12348, NULL),
(1, '1236460', 'Descripción del activo 5', 'Marca5', 'Modelo5', 'Serie5', 'Activo', '900.00', 1, 12349, 1);