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

INSERT INTO ims_assets (assets_regis_location, assets_no, assets_description, assets_brand, assets_model, assets_series, assets_active, assets_acquisition_value, assets_curr_location, assets_invoice_number, assent_law_id)
VALUES (1, 'Asset016', 'Descripción del activo 16', 'Marca16', 'Modelo16', 'Serie16', 'Y', 'Valor16', 1, 98765, 1);

INSERT INTO ims_assets (assets_regis_location, assets_no, assets_description, assets_brand, assets_model, assets_series, assets_active, assets_acquisition_value, assets_curr_location, assets_invoice_number, assent_law_id)
VALUES (1, 'Asset017', 'Descripción del activo 17', 'Marca17', 'Modelo17', 'Serie17', 'Y', 'Valor17', 1, 23456, 1);

INSERT INTO ims_assets (assets_regis_location, assets_no, assets_description, assets_brand, assets_model, assets_series, assets_active, assets_acquisition_value, assets_curr_location, assets_invoice_number, assent_law_id)
VALUES (1, 'Asset018', 'Descripción del activo 18', 'Marca18', 'Modelo18', 'Serie18', 'Y', 'Valor18', 1, 54321, 1);

INSERT INTO ims_assets (assets_regis_location, assets_no, assets_description, assets_brand, assets_model, assets_series, assets_active, assets_acquisition_value, assets_curr_location, assets_invoice_number, assent_law_id)
VALUES (1, 'Asset019', 'Descripción del activo 19', 'Marca19', 'Modelo19', 'Serie19', 'Y', 'Valor19', 1, 98765, 1);

INSERT INTO ims_assets (assets_regis_location, assets_no, assets_description, assets_brand, assets_model, assets_series, assets_active, assets_acquisition_value, assets_curr_location, assets_invoice_number, assent_law_id)
VALUES (1, 'Asset020', 'Descripción del activo 20', 'Marca20', 'Modelo20', 'Serie20', 'Y', 'Valor20', 1, 23456, 1);

INSERT INTO ims_assets (assets_regis_location, assets_no, assets_description, assets_brand, assets_model, assets_series, assets_active, assets_acquisition_value, assets_curr_location, assets_invoice_number, assent_law_id)
VALUES (1, 'Asset021', 'Descripción del activo 21', 'Marca21', 'Modelo21', 'Serie21', 'Y', 'Valor21', 1, 54321, 1);

INSERT INTO ims_assets (assets_regis_location, assets_no, assets_description, assets_brand, assets_model, assets_series, assets_active, assets_acquisition_value, assets_curr_location, assets_invoice_number, assent_law_id)
VALUES (1, 'Asset022', 'Descripción del activo 22', 'Marca22', 'Modelo22', 'Serie22', 'Y', 'Valor22', 1, 98765, 1);

INSERT INTO ims_assets (assets_regis_location, assets_no, assets_description, assets_brand, assets_model, assets_series, assets_active, assets_acquisition_value, assets_curr_location, assets_invoice_number, assent_law_id)
VALUES (1, 'Asset023', 'Descripción del activo 23', 'Marca23', 'Modelo23', 'Serie23', 'Y', 'Valor23', 1, 23456, 1);

INSERT INTO ims_assets (assets_regis_location, assets_no, assets_description, assets_brand, assets_model, assets_series, assets_active, assets_acquisition_value, assets_curr_location, assets_invoice_number, assent_law_id)
VALUES (1, 'Asset024', 'Descripción del activo 24', 'Marca24', 'Modelo24', 'Serie24', 'Y', 'Valor24', 1, 54321, 1);

INSERT INTO ims_assets (assets_regis_location, assets_no, assets_description, assets_brand, assets_model, assets_series, assets_active, assets_acquisition_value, assets_curr_location, assets_invoice_number, assent_law_id)
VALUES (1, 'Asset025', 'Descripción del activo 25', 'Marca25', 'Modelo25', 'Serie25', 'Y', 'Valor25', 1, 98765, 1);



SELECT r.* FROM ims_register r JOIN ims_register_assets rs on r.reg_id = rs.reg_id JOIN ims_assets a on a.assets_no= rs.assets_no
WHERE a.assets_no = 11655641 and r.reg_type = 'Register'

