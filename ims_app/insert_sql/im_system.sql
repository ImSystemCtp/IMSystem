-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-11-2023 a las 05:24:12
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `im_system`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ims_assets`
--

CREATE TABLE `ims_assets` (
  `assets_regis_location` int(11) NOT NULL,
  `assets_no` varchar(191) NOT NULL,
  `assets_description` varchar(30) NOT NULL,
  `assets_brand` varchar(15) NOT NULL,
  `assets_model` varchar(20) NOT NULL,
  `assets_series` varchar(20) NOT NULL,
  `assets_acquisition_value` varchar(30) NOT NULL,
  `assets_curr_location` int(11) DEFAULT NULL,
  `assets_invoice_number` varchar(191) DEFAULT NULL,
  `assent_law_id` int(11) DEFAULT NULL,
  `assets_state` enum('Bueno','Regular','Malo') NOT NULL DEFAULT 'Bueno',
  `invoice_date` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `ims_assets`
--

INSERT INTO `ims_assets` (`assets_regis_location`, `assets_no`, `assets_description`, `assets_brand`, `assets_model`, `assets_series`, `assets_acquisition_value`, `assets_curr_location`, `assets_invoice_number`, `assent_law_id`, `assets_state`, `invoice_date`) VALUES
(1, '11655641', 'Moto', 'Honda', '2024', 'CRF450', '8000000', 1, '12265', 1, 'Malo', NULL),
(1, '1236451', 'Descripción del activo 1', 'Marca1', 'Modelo1', 'Serie1', '1000.00', 1, '12345', 1, 'Bueno', NULL),
(1, '1236452', 'Descripción del activo 2', 'Marca2', 'Modelo2', 'Serie2', '1500.00', 1, '12346', NULL, 'Bueno', NULL),
(1, '1236453', 'Descripción del activo 3', 'Marca3', 'Modelo3', 'Serie3', '750.00', 1, '12347', 1, 'Bueno', NULL),
(1, '1236454', 'Descripción del activo 4', 'Marca4', 'Modelo4', 'Serie4', '2000.00', 1, '12348', NULL, 'Bueno', NULL),
(1, '1236455', 'Descripción del activo 5', 'Marca5', 'Modelo5', 'Serie5', '900.00', 1, '12349', 1, 'Bueno', NULL),
(1, '1236456', 'Descripción del activo 1', 'Marca1', 'Modelo1', 'Serie1', '1000.00', 1, '12345', 1, 'Bueno', NULL),
(1, '1236457', 'Descripción del activo 2', 'Marca2', 'Modelo2', 'Serie2', '1500.00', 1, '12346', NULL, 'Bueno', NULL),
(1, '1236458', 'Descripción del activo 3', 'Marca3', 'Modelo3', 'Serie3', '750.00', 1, '12347', 1, 'Bueno', NULL),
(1, '1236459', 'Descripción del activo 4', 'Marca4', 'Modelo4', 'Serie4', '2000.00', 1, '12348', NULL, 'Bueno', NULL),
(1, '1236460', 'Descripción del activo 5', 'Marca5', 'Modelo5', 'Serie5', '900.00', 1, '12349', 1, 'Bueno', NULL),
(1, '1515', 'asdasd', 'asdasd', 'jose', 'asdasd', '8000000', 1, '123123', 1, 'Bueno', '2023-08-09 00:00:00.000'),
(4, '201433923097620', 'rutrum at lorem integer tincid', 'Buick', 'Riviera', '1999', '783', 4, '306', 5, 'Bueno', '2023-11-23 00:00:00.000'),
(5, '201742222555926', 'posuere felis sed lacus morbi ', 'Pontiac', 'GTO', '1964', '752', 5, '868', 9, 'Bueno', '2023-11-23 00:00:00.000'),
(5, '201973230122884', 'vel ipsum praesent blandit lac', 'Mazda', 'Protege', '2002', '951', 5, '797', 4, 'Bueno', '2023-11-23 00:00:00.000'),
(4, '30094974155670', 'cubilia curae duis faucibus ac', 'Volkswagen', 'GTI', '1991', '943', 4, '642', 7, 'Bueno', '2023-11-23 00:00:00.000'),
(2, '30276803732171', 'iaculis congue vivamus metus a', 'BMW', 'Z4', '2010', '865', 2, '868', 8, 'Bueno', '2023-11-23 00:00:00.000'),
(10, '30340287940021', 'sed sagittis nam congue risus ', 'Chevrolet', 'Express 1500', '2000', '140', 10, '144', 8, 'Bueno', '2023-11-23 00:00:00.000'),
(1, '30380552785537', 'eu massa donec dapibus duis at', 'Scion', 'xA', '2005', '870', 1, '202', 8, 'Bueno', '2023-11-23 00:00:00.000'),
(1, '3111442s3WAss3Wa13231', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, '311144313231', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, '3111443W13231', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, '311144A3W13231', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, '311144s3WAs3Wa13231', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, '311144s3WAss3Wa13231', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, '311144sWA3Wa13231', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, '311144sWAs3Wa13231', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, '311144WA3W13231', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, '311144WA3Wa13231', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(3, '345742123806482', 'ante ipsum primis in faucibus ', 'Mercedes-Benz', '300CE', '1992', '450', 3, '361', 2, 'Bueno', '2023-11-23 00:00:00.000'),
(5, '3529480086287653', 'quis tortor id nulla ultrices ', 'Volkswagen', 'Touareg', '2008', '198', 5, '463', 8, 'Bueno', '2023-11-23 00:00:00.000'),
(2, '3534198240029943', 'turpis a pede posuere nonummy ', 'BMW', 'Z3', '1999', '467', 2, '159', 6, 'Bueno', '2023-11-23 00:00:00.000'),
(6, '3538608214420858', 'sollicitudin ut suscipit a feu', 'Pontiac', 'Bonneville', '1966', '888', 6, '441', 8, 'Bueno', '2023-11-23 00:00:00.000'),
(2, '3542101403971653', 'massa tempor convallis nulla n', 'Kia', 'Optima', '2012', '770', 2, '127', 1, 'Bueno', '2023-11-23 00:00:00.000'),
(9, '3546477595748182', 'integer a nibh in quis justo m', 'Chevrolet', 'Suburban 2500', '1997', '997', 9, '631', 6, 'Bueno', '2023-11-23 00:00:00.000'),
(5, '3546768070149619', 'parturient montes nascetur rid', 'Chevrolet', 'Monte Carlo', '2001', '669', 5, '422', 9, 'Bueno', '2023-11-23 00:00:00.000'),
(3, '3550629398688360', 'quis justo maecenas rhoncus al', 'Saab', '9-3', '2010', '829', 3, '318', 8, 'Bueno', '2023-11-23 00:00:00.000'),
(8, '3556568471513034', 'integer non velit donec diam n', 'Chevrolet', 'HHR', '2008', '143', 8, '451', 10, 'Bueno', '2023-11-23 00:00:00.000'),
(1, '3556598727930443', 'ipsum integer a nibh in quis j', 'Ford', 'Five Hundred', '2007', '215', 1, '452', 5, 'Bueno', '2023-11-23 00:00:00.000'),
(9, '3557461384335480', 'aenean sit amet justo morbi ut', 'Chrysler', 'PT Cruiser', '2007', '513', 9, '282', 9, 'Bueno', '2023-11-23 00:00:00.000'),
(10, '3567858768374035', 'duis bibendum felis sed interd', 'Buick', 'Regal', '2012', '208', 10, '499', 3, 'Bueno', '2023-11-23 00:00:00.000'),
(10, '3573734178533811', 'duis mattis egestas metus aene', 'Subaru', 'Forester', '2012', '986', 10, '345', 3, 'Bueno', '2023-11-23 00:00:00.000'),
(1, '3573856433534720', 'in magna bibendum imperdiet nu', 'Honda', 'Fit', '2008', '512', 1, '120', 2, 'Bueno', '2023-11-23 00:00:00.000'),
(10, '3575793029365821', 'quam nec dui luctus rutrum nul', 'GMC', '2500', '1992', '508', 10, '890', 3, 'Bueno', '2023-11-23 00:00:00.000'),
(8, '3577333437038674', 'interdum in ante vestibulum an', 'Dodge', 'Ram 2500', '1995', '303', 8, '759', 3, 'Bueno', '2023-11-23 00:00:00.000'),
(9, '3578415479580355', 'sapien non mi integer ac neque', 'Ford', 'Laser', '1986', '616', 9, '390', 4, 'Bueno', '2023-11-23 00:00:00.000'),
(1, '3579777343475834', 'sem duis aliquam convallis nun', 'Honda', 'Pilot', '2005', '396', 1, '358', 2, 'Bueno', '2023-11-23 00:00:00.000'),
(4, '3580150562323928', 'sit amet sem fusce consequat n', 'Mercury', 'Tracer', '1995', '481', 4, '632', 7, 'Bueno', '2023-11-23 00:00:00.000'),
(1, '3584591654786959', 'libero nullam sit amet turpis ', 'Ford', 'E150', '2003', '502', 1, '103', 8, 'Bueno', '2023-11-23 00:00:00.000'),
(8, '3586602588582766', 'faucibus orci luctus et ultric', 'Ford', 'Aerostar', '1992', '876', 8, '422', 7, 'Bueno', '2023-11-23 00:00:00.000'),
(8, '3587986430854468', 'odio porttitor id consequat in', 'Isuzu', 'Hombre Space', '2000', '948', 8, '417', 1, 'Bueno', '2023-11-23 00:00:00.000'),
(9, '3588397783011269', 'amet cursus id turpis integer ', 'Honda', 'Accord', '2008', '331', 9, '342', 2, 'Bueno', '2023-11-23 00:00:00.000'),
(9, '372301540735927', 'tincidunt eu felis fusce posue', 'Nissan', '300ZX', '1993', '437', 9, '447', 3, 'Bueno', '2023-11-23 00:00:00.000'),
(9, '372301544651666', 'sit amet erat nulla tempus viv', 'Hyundai', 'Sonata', '1999', '879', 9, '150', 4, 'Bueno', '2023-11-23 00:00:00.000'),
(5, '374622155923005', 'est donec odio justo sollicitu', 'Plymouth', 'Acclaim', '1992', '182', 5, '969', 6, 'Bueno', '2023-11-23 00:00:00.000'),
(9, '4041592457337', 'nec dui luctus rutrum nulla te', 'Chevrolet', 'Corvette', '1953', '245', 9, '653', 2, 'Bueno', '2023-11-23 00:00:00.000'),
(7, '4041592847675708', 'porttitor pede justo eu massa ', 'Toyota', 'Tacoma Xtra', '2001', '264', 7, '831', 10, 'Bueno', '2023-11-23 00:00:00.000'),
(9, '4114494106276', 'ipsum dolor sit amet consectet', 'Pontiac', 'Firefly', '1994', '313', 9, '439', 9, 'Bueno', '2023-11-23 00:00:00.000'),
(5, '4175005086559218', 'rhoncus aliquet pulvinar sed n', 'BMW', '6 Series', '2004', '312', 5, '618', 5, 'Bueno', '2023-11-23 00:00:00.000'),
(8, '4508576535790644', 'sodales scelerisque mauris sit', 'Ford', 'Probe', '1995', '805', 8, '872', 5, 'Bueno', '2023-11-23 00:00:00.000'),
(5, '4508621792987192', 'curabitur in libero ut massa v', 'Plymouth', 'Horizon', '1978', '369', 5, '950', 7, 'Bueno', '2023-11-23 00:00:00.000'),
(3, '4518092555694', 'pede ullamcorper augue a susci', 'Mercedes-Benz', 'R-Class', '2012', '683', 3, '831', 1, 'Bueno', '2023-11-23 00:00:00.000'),
(2, '4844176695030528', 'vel nisl duis ac nibh fusce la', 'Volkswagen', 'Jetta', '1991', '858', 2, '563', 9, 'Bueno', '2023-11-23 00:00:00.000'),
(1, '490314660322377222', 'porttitor id consequat in cons', 'GMC', 'Sierra 1500', '2013', '545', 1, '794', 3, 'Bueno', '2023-11-23 00:00:00.000'),
(10, '4905861316815425', 'orci eget orci vehicula condim', 'Buick', 'Skylark', '1994', '781', 10, '403', 1, 'Bueno', '2023-11-23 00:00:00.000'),
(9, '4936383151361671422', 'in lectus pellentesque at null', 'Mazda', 'RX-8', '2004', '419', 9, '191', 1, 'Bueno', '2023-11-23 00:00:00.000'),
(8, '4936734681059924', 'in ante vestibulum ante ipsum ', 'Infiniti', 'G35', '2006', '439', 8, '622', 1, 'Bueno', '2023-11-23 00:00:00.000'),
(4, '5002359683414681', 'metus vitae ipsum aliquam non ', 'Audi', 'A8', '2005', '737', 4, '671', 10, 'Bueno', '2023-11-23 00:00:00.000'),
(3, '5018712248241656066', 'eleifend quam a odio in hac ha', 'GMC', 'Safari', '2004', '785', 3, '538', 8, 'Bueno', '2023-11-23 00:00:00.000'),
(6, '5020648585267516269', 'aenean auctor gravida sem prae', 'Morgan', 'Aero 8', '2008', '168', 6, '561', 4, 'Bueno', '2023-11-23 00:00:00.000'),
(7, '5048370124001264', 'posuere cubilia curae donec ph', 'Eagle', 'Talon', '1992', '379', 7, '781', 4, 'Bueno', '2023-11-23 00:00:00.000'),
(2, '5048373489359129', 'libero convallis eget eleifend', 'Audi', 'A6', '1999', '291', 2, '999', 4, 'Bueno', '2023-11-23 00:00:00.000'),
(3, '5100130727356944', 'quam suspendisse potenti nulla', 'Volkswagen', 'Type 2', '1990', '207', 3, '784', 5, 'Bueno', '2023-11-23 00:00:00.000'),
(2, '5130904308131726', 'quam sapien varius ut blandit ', 'Chevrolet', 'Malibu', '2001', '888', 2, '455', 1, 'Bueno', '2023-11-23 00:00:00.000'),
(6, '5373869376144677', 'euismod scelerisque quam turpi', 'Nissan', 'Quest', '2002', '612', 6, '901', 2, 'Bueno', '2023-11-23 00:00:00.000'),
(3, '5377016139810816', 'pellentesque at nulla suspendi', 'Subaru', 'Legacy', '2009', '449', 3, '144', 10, 'Bueno', '2023-11-23 00:00:00.000'),
(1, '5533427086777455', 'eleifend luctus ultricies eu n', 'Porsche', '928', '1995', '483', 1, '356', 3, 'Bueno', '2023-11-23 00:00:00.000'),
(7, '5602210998431072', 'aliquam erat volutpat in congu', 'Chevrolet', 'Astro', '1993', '815', 7, '681', 3, 'Bueno', '2023-11-23 00:00:00.000'),
(7, '56022157712345408', 'molestie sed justo pellentesqu', 'Dodge', 'Ram Van 1500', '2000', '770', 7, '194', 9, 'Bueno', '2023-11-23 00:00:00.000'),
(6, '5602246554725838', 'mus vivamus vestibulum sagitti', 'Kia', 'Sephia', '2001', '292', 6, '224', 3, 'Bueno', '2023-11-23 00:00:00.000'),
(5, '5602247428383507', 'nam dui proin leo odio porttit', 'Land Rover', 'Discovery', '1999', '382', 5, '946', 2, 'Bueno', '2023-11-23 00:00:00.000'),
(5, '5602252087485700', 'pharetra magna ac consequat me', 'Mitsubishi', 'Galant', '2007', '682', 5, '157', 10, 'Bueno', '2023-11-23 00:00:00.000'),
(2, '560225723749711379', 'ante ipsum primis in faucibus ', 'Honda', 'Prelude', '1992', '832', 2, '970', 5, 'Bueno', '2023-11-23 00:00:00.000'),
(6, '5602257570085276616', 'libero ut massa volutpat conva', 'Kia', 'Sportage', '2005', '147', 6, '639', 3, 'Bueno', '2023-11-23 00:00:00.000'),
(1, '5610904789816463', 'vestibulum rutrum rutrum neque', 'Jaguar', 'XJ Series', '1993', '173', 1, '288', 8, 'Bueno', '2023-11-23 00:00:00.000'),
(8, '564182935420361083', 'sit amet eros suspendisse accu', 'Toyota', 'Solara', '2006', '264', 8, '771', 7, 'Bueno', '2023-11-23 00:00:00.000'),
(4, '63041723891424505', 'condimentum id luctus nec mole', 'Mazda', '626', '1993', '179', 4, '384', 1, 'Bueno', '2023-11-23 00:00:00.000'),
(9, '630434764039918603', 'non velit donec diam neque ves', 'Buick', 'Regal', '2003', '772', 9, '673', 7, 'Bueno', '2023-11-23 00:00:00.000'),
(10, '630489430937137027', 'lectus pellentesque at nulla s', 'Ford', 'Tempo', '1985', '586', 10, '582', 2, 'Bueno', '2023-11-23 00:00:00.000'),
(5, '6333787325939681', 'lacinia erat vestibulum sed ma', 'Cadillac', 'Escalade', '2010', '710', 5, '243', 8, 'Bueno', '2023-11-23 00:00:00.000'),
(4, '6334250596584420', 'nulla justo aliquam quis turpi', 'Ford', 'Econoline E350', '1996', '765', 4, '730', 6, 'Bueno', '2023-11-23 00:00:00.000'),
(5, '6374555621356474', 'tortor risus dapibus augue vel', 'Honda', 'CR-V', '1997', '361', 5, '732', 10, 'Bueno', '2023-11-23 00:00:00.000'),
(4, '6377025939483383', 'neque sapien placerat ante nul', 'Nissan', 'Maxima', '2005', '535', 4, '970', 1, 'Bueno', '2023-11-23 00:00:00.000'),
(10, '6385230201382509', 'neque duis bibendum morbi non ', 'Chrysler', '300M', '2000', '480', 10, '867', 6, 'Bueno', '2023-11-23 00:00:00.000'),
(6, '670658658276168481', 'quam pede lobortis ligula sit ', 'Mitsubishi', 'RVR', '1993', '688', 6, '299', 7, 'Bueno', '2023-11-23 00:00:00.000'),
(9, '670967269802183477', 'quam sollicitudin vitae consec', 'Infiniti', 'I', '2001', '621', 9, '839', 9, 'Bueno', '2023-11-23 00:00:00.000'),
(1, '6759156331248701803', 'blandit non interdum in ante v', 'Mazda', 'Mazda6', '2013', '945', 1, '495', 4, 'Bueno', '2023-11-23 00:00:00.000'),
(2, '6759172540603687908', 'vivamus in felis eu sapien cur', 'Cadillac', 'Seville', '1999', '619', 2, '105', 7, 'Bueno', '2023-11-23 00:00:00.000'),
(5, '6762792327342363', 'quam nec dui luctus rutrum nul', 'Maserati', 'Biturbo', '1984', '122', 5, '175', 9, 'Bueno', '2023-11-23 00:00:00.000'),
(7, '6763060362444356', 'amet sem fusce consequat nulla', 'Porsche', 'Boxster', '2009', '709', 7, '466', 2, 'Bueno', '2023-11-23 00:00:00.000'),
(1, '8311143111', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, '8311AS143111', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, '8311AS1W43111', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, '8311S143111', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, '83a113Ass2Ss1W43111', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, '83a113AssS1W43111', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, '83a113AssSs1W43111', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, '83a11AS1W43111', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, '83a11AsS1W43111', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, '83a11AssS1W43111', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, '914123413314', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, '914123E413314', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, '91412A3E413314', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, '91412aAW3E413314', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, '91412as3AssW3E2413314', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, '91412as3AssW3E413314', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, '91412as3AsW3E413314', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, '91412asAsW3E413314', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, '91412asAW3E413314', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, '91412AW3E413314', 'string', 'string', 'string', 'string', '122', 1, NULL, NULL, 'Bueno', NULL),
(1, 'Asset1', 'Descripción del activo 1', 'Marca1', 'Modelo1', 'Serie1', '1000.00', 1, '12345', 1, 'Bueno', NULL),
(1, 'Asset2', 'Descripción del activo 2', 'Marca2', 'Modelo2', 'Serie2', '1500.00', 1, '12346', NULL, 'Bueno', NULL),
(1, 'Asset3', 'Descripción del activo 3', 'Marca3', 'Modelo3', 'Serie3', '750.00', 1, '12347', 1, 'Bueno', NULL),
(1, 'Asset4', 'Descripción del activo 4', 'Marca4', 'Modelo4', 'Serie4', '2000.00', 1, '12348', NULL, 'Bueno', NULL),
(1, 'Asset5', 'Descripción del activo 5', 'Marca5', 'Modelo5', 'Serie5', '900.00', 1, '12349', 1, 'Bueno', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ims_details_asset`
--

CREATE TABLE `ims_details_asset` (
  `deta_id` int(11) NOT NULL,
  `deta_description` varchar(100) DEFAULT NULL,
  `deta_req_id` int(11) NOT NULL,
  `deta_assets_no` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `ims_details_asset`
--

INSERT INTO `ims_details_asset` (`deta_id`, `deta_description`, `deta_req_id`, `deta_assets_no`) VALUES
(1, 'nada', 2, '11655641'),
(2, 'nada', 3, '11655641'),
(3, 'Nise', 4, '1236451'),
(4, 'nada', 5, '11655641'),
(5, 'nada', 5, '1236453'),
(6, 'nada', 5, '1236454'),
(7, 'Inservible', 6, '1236451'),
(8, 'Inservible', 6, '1236452'),
(9, 'Inservible', 6, '1236453'),
(10, 'Inservible', 6, '1236454'),
(11, 'Inservible', 7, '1236451'),
(12, 'Inservible', 7, '1236452'),
(13, 'Inservible', 7, '1236453');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ims_institution`
--

CREATE TABLE `ims_institution` (
  `inst_id` int(11) NOT NULL,
  `inst_name` varchar(60) NOT NULL,
  `inst_description` varchar(100) DEFAULT NULL,
  `inst_location` varchar(60) DEFAULT NULL,
  `inst_phone` varchar(20) DEFAULT NULL,
  `inst_email` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `ims_institution`
--

INSERT INTO `ims_institution` (`inst_id`, `inst_name`, `inst_description`, `inst_location`, `inst_phone`, `inst_email`) VALUES
(1, 'CTP platanares ', '[value-4]', '[value-4]', '[value-5]', '[value-6]'),
(2, 'Institución A', 'Descripción de la Institución A', 'Ubicación A', '123-456-7890', 'correo@institucionA.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ims_laws`
--

CREATE TABLE `ims_laws` (
  `law_id` int(11) NOT NULL,
  `law_name` varchar(20) NOT NULL,
  `law_description` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `ims_laws`
--

INSERT INTO `ims_laws` (`law_id`, `law_name`, `law_description`) VALUES
(1, 'Ley1', 'Descripción de la Ley 1'),
(2, '1', 'Fuscia'),
(3, '2', 'Khaki'),
(4, '3', 'Teal'),
(5, '4', 'Pink'),
(6, '5', 'Yellow'),
(7, '6', 'Purple'),
(8, '7', 'Orange'),
(9, '8', 'Indigo'),
(10, '9', 'Puce'),
(11, '10', 'Khaki');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ims_locations`
--

CREATE TABLE `ims_locations` (
  `location_id` int(11) NOT NULL,
  `location_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `ims_locations`
--

INSERT INTO `ims_locations` (`location_id`, `location_name`) VALUES
(1, 'Ubicación A'),
(2, 'Spain'),
(3, 'Russia'),
(4, 'Sweden'),
(5, 'China'),
(6, 'Philippines'),
(7, 'China'),
(8, 'Indonesia'),
(9, 'Philippines'),
(10, 'China'),
(11, 'China');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ims_register`
--

CREATE TABLE `ims_register` (
  `reg_id` int(11) NOT NULL,
  `reg_tomo` int(11) NOT NULL,
  `reg_folio` int(11) NOT NULL,
  `reg_asiento` int(11) NOT NULL,
  `reg_type` enum('Register','Low','Transfer') NOT NULL,
  `reg_date` datetime(3) DEFAULT NULL,
  `reg_observation` varchar(3000) DEFAULT NULL,
  `reg_usu_id` int(11) NOT NULL,
  `reg_inst_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `ims_register`
--

INSERT INTO `ims_register` (`reg_id`, `reg_tomo`, `reg_folio`, `reg_asiento`, `reg_type`, `reg_date`, `reg_observation`, `reg_usu_id`, `reg_inst_id`) VALUES
(1, 1, 1, 1, 'Register', NULL, NULL, 2, 1),
(2, 1, 1, 1, 'Register', NULL, NULL, 2, 1),
(3, 1, 1, 1, 'Register', NULL, NULL, 2, 1),
(4, 1, 1, 1, 'Register', NULL, NULL, 2, 1),
(5, 1, 1, 1, 'Register', NULL, 'null Ver 2,  2,  2', 2, 1),
(6, 1, 1, 1, 'Register', NULL, NULL, 2, 1),
(7, 2, 2, 2, 'Low', NULL, 'Prueba de baja', 1, 1),
(8, 2, 2, 2, 'Low', NULL, 'Prueba de baja', 1, 1),
(9, 2, 2, 2, 'Low', NULL, 'prueba de baja 2', 1, 1),
(10, 2, 2, 2, 'Low', NULL, 'prueba de baja 2', 1, 1),
(11, 1, 1, 1, 'Register', NULL, 'Donacion de MEP', 1, 1),
(12, 1, 1, 1, 'Register', NULL, 'Donacion de MEP', 1, 1),
(13, 1, 1, 1, 'Register', NULL, 'Donacion de MEP', 1, 1),
(14, 1, 1, 1, 'Register', NULL, 'Donacion de MEP', 1, 1),
(15, 1, 1, 1, 'Register', NULL, 'Donacion de MEP', 1, 1),
(16, 1, 1, 1, 'Register', NULL, 'Donacion de MEP', 1, 1),
(17, 1, 1, 1, 'Register', NULL, 'Donacion de MEP', 1, 1),
(18, 1, 1, 1, 'Register', NULL, 'Donacion de MEP', 1, 1),
(19, 1, 1, 1, 'Register', NULL, 'Donacion de MEP', 1, 1),
(20, 1, 1, 2, 'Register', NULL, 'Donacion de MEP', 1, 1),
(21, 1, 1, 2, 'Register', NULL, 'Donacion de MEP', 1, 1),
(22, 1, 1, 2, 'Register', NULL, 'Donacion de MEP', 1, 1),
(23, 1, 1, 3, 'Register', NULL, 'Donacion de MEP', 1, 1),
(24, 1, 1, 3, 'Register', NULL, 'Donacion de MEP', 1, 1),
(26, 1, 1, 4, 'Register', NULL, 'Donacion de MEP', 1, 1),
(27, 1, 1, 4, 'Register', NULL, 'Donacion de MEP', 1, 1),
(28, 1, 1, 4, 'Register', NULL, 'Donacion de MEP', 1, 1),
(29, 1, 1, 5, 'Register', NULL, 'Donacion de MEP', 1, 1),
(30, 1, 1, 5, 'Register', NULL, 'Donacion de MEP', 1, 1),
(31, 1, 1, 5, 'Register', NULL, 'Donacion de MEP', 1, 1),
(32, 1, 1, 6, 'Register', NULL, 'Donacion de MEP', 1, 1),
(33, 1, 1, 6, 'Register', NULL, 'Donacion de MEP', 1, 1),
(34, 1, 1, 6, 'Register', NULL, 'Donacion de MEP', 1, 1),
(35, 1, 1, 7, 'Register', NULL, 'Donacion de MEP', 1, 1),
(36, 1, 1, 7, 'Register', NULL, 'Donacion de MEP', 1, 1),
(37, 1, 1, 7, 'Register', NULL, 'Donacion de MEP', 1, 1),
(38, 1, 1, 8, 'Register', NULL, 'Donacion de MEP', 1, 1),
(39, 1, 1, 9, 'Register', NULL, 'Donacion de MEP', 1, 1),
(40, 1, 1, 9, 'Register', NULL, 'Donacion de MEP', 1, 1),
(41, 1, 1, 10, 'Register', NULL, 'Donacion de MEP', 1, 1),
(42, 1, 1, 10, 'Register', NULL, 'Donacion de MEP', 1, 1),
(43, 1, 1, 10, 'Register', NULL, 'Donacion de MEP', 1, 1),
(44, 1, 1, 11, 'Register', NULL, 'Donacion de MEP', 1, 1),
(45, 1, 1, 11, 'Register', NULL, 'Donacion de MEP', 1, 1),
(46, 1, 1, 11, 'Register', NULL, 'Donacion de MEP', 1, 1),
(47, 1, 1, 12, 'Register', NULL, 'Donacion de MEP', 1, 1),
(48, 1, 1, 12, 'Register', NULL, 'Donacion de MEP', 1, 1),
(49, 1, 1, 12, 'Register', NULL, 'Donacion de MEP', 1, 1),
(50, 1, 1, 13, 'Register', NULL, 'Donacion de MEP', 1, 1),
(51, 1, 1, 13, 'Register', NULL, 'Donacion de MEP', 1, 1),
(52, 1, 1, 13, 'Register', NULL, 'Donacion de MEP', 1, 1),
(53, 1, 1, 15, 'Register', NULL, 'Donacion de MEP', 1, 1),
(54, 1, 1, 15, 'Register', NULL, 'Donacion de MEP', 1, 1),
(55, 1, 1, 15, 'Register', NULL, 'Donacion de MEP', 1, 1),
(56, 1, 1, 16, 'Register', NULL, 'Donacion de MEP', 1, 1),
(57, 1, 1, 16, 'Register', NULL, 'Donacion de MEP', 1, 1),
(58, 1, 1, 16, 'Register', NULL, 'Donacion de MEP', 1, 1),
(59, 1, 1, 17, 'Register', NULL, 'Donacion de MEP', 1, 1),
(60, 1, 1, 17, 'Register', NULL, 'Donacion de MEP', 1, 1),
(61, 1, 1, 17, 'Register', NULL, 'Donacion de MEP', 1, 1),
(62, 1, 1, 18, 'Register', NULL, 'Donacion de MEP', 1, 1),
(63, 1, 1, 18, 'Register', NULL, 'Donacion de MEP', 1, 1),
(64, 1, 1, 18, 'Register', NULL, 'Donacion de MEP', 1, 1),
(65, 1, 1, 19, 'Register', NULL, 'Donacion de MEP', 1, 1),
(66, 1, 1, 19, 'Register', NULL, 'Donacion de MEP', 1, 1),
(67, 1, 1, 19, 'Register', NULL, 'Donacion de MEP', 1, 1),
(68, 1, 1, 20, 'Register', NULL, 'Donacion de MEP', 1, 1),
(69, 1, 1, 20, 'Register', NULL, 'Donacion de MEP', 1, 1),
(70, 1, 1, 20, 'Register', NULL, 'Donacion de MEP', 1, 1),
(71, 1, 1, 21, 'Register', NULL, 'Donacion de MEP', 1, 1),
(72, 1, 1, 21, 'Register', NULL, 'Donacion de MEP', 1, 1),
(73, 1, 1, 21, 'Register', NULL, 'Donacion de MEP', 1, 1),
(74, 1, 1, 22, 'Register', NULL, 'testRegister', 1, 1),
(75, 1, 1, 23, 'Register', NULL, 'testRegister', 1, 1),
(76, 1, 1, 24, 'Register', NULL, 'testRegister', 1, 1),
(77, 1, 1, 2, 'Register', NULL, 'testRegister', 1, 1),
(78, 1, 1, 3, 'Register', NULL, 'testRegister', 1, 1),
(79, 1, 1, 4, 'Register', NULL, 'testRegister', 1, 1),
(80, 1, 1, 5, 'Register', NULL, 'testRegister', 1, 1),
(81, 1, 1, 6, 'Register', NULL, 'testRegister', 1, 1),
(82, 1, 1, 7, 'Register', NULL, 'testRegister', 1, 1),
(83, 1, 1, 8, 'Register', NULL, 'testRegister', 1, 1),
(84, 1, 1, 9, 'Register', NULL, 'testRegister', 1, 1),
(85, 1, 1, 9, 'Register', NULL, 'testRegister', 1, 1),
(86, 1, 1, 10, 'Register', NULL, 'testRegister', 1, 1),
(87, 1, 1, 11, 'Register', NULL, 'testRegister', 1, 1),
(88, 1, 1, 12, 'Register', NULL, 'testRegister', 1, 1),
(89, 1, 1, 13, 'Register', NULL, 'testRegister', 1, 1),
(90, 1, 1, 14, 'Register', NULL, 'testRegister', 1, 1),
(91, 1, 1, 15, 'Register', NULL, 'testRegister', 1, 1),
(92, 1, 1, 16, 'Register', '2023-11-12 17:48:07.029', NULL, 1, 1),
(93, 1, 1, 17, 'Register', NULL, 'Register1', 2, 1),
(94, 1, 1, 18, 'Register', NULL, 'Register1', 2, 1),
(95, 1, 1, 19, 'Register', NULL, 'Register1', 2, 1),
(96, 1, 1, 20, 'Register', NULL, 'Register1', 2, 1),
(97, 1, 1, 21, 'Register', NULL, 'Register1', 2, 1),
(98, 1, 1, 22, 'Register', NULL, 'Register1', 2, 1),
(99, 1, 1, 23, 'Register', NULL, 'Register1', 2, 1),
(100, 1, 1, 24, 'Register', NULL, 'Register1', 2, 1),
(101, 1, 1, 25, 'Register', NULL, 'Register1', 2, 1),
(102, 1, 2, 1, 'Register', NULL, 'Register1', 1, 1),
(103, 1, 2, 2, 'Register', NULL, 'Register1', 1, 1),
(104, 1, 2, 3, 'Register', NULL, 'Register1', 1, 1),
(105, 1, 2, 4, 'Register', NULL, 'Register1', 1, 1),
(106, 1, 2, 5, 'Register', NULL, 'Register1', 1, 1),
(107, 1, 2, 6, 'Register', NULL, 'Register1', 1, 1),
(108, 1, 2, 7, 'Register', NULL, 'Register1', 1, 1),
(109, 1, 2, 8, 'Register', NULL, 'Register1', 1, 1),
(110, 1, 2, 9, 'Register', NULL, 'Register1', 1, 1),
(111, 1, 2, 10, 'Register', NULL, 'Register1', 1, 1),
(112, 1, 2, 11, 'Register', NULL, 'Register1', 1, 1),
(113, 1, 2, 12, 'Register', NULL, 'Register1', 1, 1),
(114, 1, 2, 13, 'Register', NULL, 'Register1', 1, 1),
(115, 1, 2, 14, 'Register', NULL, 'Register1', 1, 1),
(116, 1, 2, 15, 'Register', NULL, 'Register1', 1, 1),
(117, 1, 2, 16, 'Register', NULL, 'Register1', 1, 1),
(118, 1, 2, 17, 'Register', NULL, 'Register1', 1, 1),
(119, 1, 2, 18, 'Register', NULL, 'Register1', 1, 1),
(120, 1, 2, 19, 'Register', NULL, 'Register1', 1, 1),
(121, 1, 2, 20, 'Register', NULL, 'Register1', 1, 1),
(122, 1, 2, 21, 'Register', NULL, 'Register1', 1, 1),
(123, 1, 2, 22, 'Register', NULL, 'Register4', 1, 1),
(124, 1, 2, 23, 'Register', NULL, 'Register4', 1, 1),
(125, 1, 2, 24, 'Register', NULL, 'Register4', 1, 1),
(126, 1, 2, 25, 'Register', NULL, 'Register4', 1, 1),
(127, 1, 3, 1, 'Register', NULL, 'Register4', 1, 1),
(128, 1, 3, 2, 'Register', NULL, 'Register4', 1, 1),
(129, 1, 3, 3, 'Register', NULL, 'Register4', 1, 1),
(130, 1, 3, 4, 'Register', NULL, 'Register4', 1, 1),
(131, 1, 3, 5, 'Register', NULL, 'Register4', 1, 1),
(132, 1, 3, 6, 'Register', NULL, 'Register4', 1, 1),
(133, 1, 3, 7, 'Register', NULL, 'Register4', 1, 1),
(134, 1, 3, 8, 'Register', NULL, 'Register4', 1, 1),
(135, 1, 3, 9, 'Register', NULL, 'Register4', 1, 1),
(136, 1, 3, 10, 'Register', NULL, 'Register4', 1, 1),
(137, 1, 3, 11, 'Register', NULL, 'Register4', 1, 1),
(138, 1, 3, 12, 'Register', NULL, 'Register4', 1, 1),
(139, 1, 3, 13, 'Register', NULL, 'Register4', 1, 1),
(140, 1, 3, 14, 'Register', NULL, 'Register4', 1, 1),
(141, 1, 3, 15, 'Register', NULL, 'Register4', 1, 1),
(142, 1, 3, 16, 'Register', NULL, 'Register4', 1, 1),
(143, 1, 3, 17, 'Register', NULL, 'Register4', 1, 1),
(144, 1, 3, 18, 'Register', NULL, 'Register4', 1, 1),
(145, 1, 3, 19, 'Register', NULL, 'Register4', 1, 1),
(146, 1, 3, 20, 'Register', NULL, 'Register4', 1, 1),
(147, 1, 3, 21, 'Register', NULL, 'Register4', 1, 1),
(148, 1, 3, 22, 'Register', NULL, 'Register4', 1, 1),
(149, 1, 3, 23, 'Register', NULL, 'Register4', 1, 1),
(150, 1, 3, 24, 'Register', NULL, 'Register4', 1, 1),
(151, 1, 3, 25, 'Register', NULL, 'Register4', 1, 1),
(152, 1, 4, 1, 'Register', NULL, 'Register4', 1, 1),
(153, 1, 4, 2, 'Register', NULL, 'Register4', 1, 1),
(154, 1, 4, 3, 'Register', NULL, 'Register4', 1, 1),
(155, 1, 4, 4, 'Register', NULL, 'Register4', 1, 1),
(156, 1, 4, 5, 'Register', NULL, 'Register4', 1, 1),
(157, 1, 4, 6, 'Register', NULL, 'Register4', 1, 1),
(158, 1, 4, 7, 'Register', NULL, 'Register4', 1, 1),
(159, 1, 4, 8, 'Register', NULL, 'Register4', 1, 1),
(160, 1, 4, 9, 'Register', NULL, 'Register4', 1, 1),
(161, 1, 4, 10, 'Register', NULL, 'Register4', 1, 1),
(162, 1, 4, 11, 'Register', NULL, 'Register4', 1, 1),
(163, 1, 4, 12, 'Register', NULL, 'Register4', 1, 1),
(164, 1, 4, 13, 'Register', NULL, 'Register4', 1, 1),
(165, 1, 4, 14, 'Register', NULL, 'Register4', 1, 1),
(166, 1, 4, 15, 'Register', NULL, 'Register4', 1, 1),
(167, 1, 4, 16, 'Register', NULL, 'Register4', 1, 1),
(168, 1, 4, 17, 'Register', NULL, 'Register4', 1, 1),
(169, 1, 4, 18, 'Register', NULL, 'Register4', 1, 1),
(170, 1, 4, 19, 'Register', NULL, 'Register4', 1, 1),
(171, 1, 4, 20, 'Register', NULL, 'Register4', 1, 1),
(172, 1, 4, 21, 'Register', NULL, 'Register4', 1, 1),
(173, 1, 4, 22, 'Register', NULL, 'Register4', 1, 1),
(174, 1, 4, 23, 'Register', NULL, 'Register4', 1, 1),
(175, 1, 4, 24, 'Register', NULL, 'Register4', 1, 1),
(176, 1, 4, 25, 'Register', NULL, 'Register4', 1, 1);

--
-- Disparadores `ims_register`
--
DELIMITER $$
CREATE TRIGGER `before_insert_register_in` BEFORE INSERT ON `ims_register` FOR EACH ROW BEGIN
    DECLARE tomo_actual INT;
    DECLARE folio_actual INT;
    DECLARE asiento_actual INT;

    SET tomo_actual = NULL;
    SET folio_actual = NULL;
    SET asiento_actual = NULL;

    SELECT tomo, folio, asiento INTO tomo_actual, folio_actual, asiento_actual
    FROM ims_registered_in
    LIMIT 1;

    IF tomo_actual IS NULL THEN
        SET tomo_actual = 1;
        SET folio_actual = 1;
        SET asiento_actual = 1;

        INSERT INTO ims_registered_in (tomo, folio, asiento)
        VALUES (tomo_actual, folio_actual, asiento_actual);
    ELSE
        SET asiento_actual = asiento_actual + 1;

        IF asiento_actual > 25 THEN
            SET asiento_actual = 1;
            SET folio_actual = folio_actual + 1;

            IF folio_actual > 500 THEN
                SET folio_actual = 1;
                SET tomo_actual = tomo_actual + 1;
            END IF;
        END IF;

        UPDATE ims_registered_in
        SET tomo = tomo_actual, folio = folio_actual, asiento = asiento_actual;

    END IF;

    SET NEW.reg_tomo = tomo_actual;
    SET NEW.reg_folio = folio_actual;
    SET NEW.reg_asiento = asiento_actual;

END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ims_registered_in`
--

CREATE TABLE `ims_registered_in` (
  `tomo` int(11) NOT NULL,
  `folio` int(11) NOT NULL,
  `asiento` int(11) NOT NULL,
  `inst_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `ims_registered_in`
--

INSERT INTO `ims_registered_in` (`tomo`, `folio`, `asiento`, `inst_id`) VALUES
(1, 4, 25, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ims_register_assets`
--

CREATE TABLE `ims_register_assets` (
  `assets_no` varchar(191) NOT NULL,
  `reg_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `ims_register_assets`
--

INSERT INTO `ims_register_assets` (`assets_no`, `reg_id`) VALUES
('11655641', 5),
('11655641', 10),
('1515', 92),
('201433923097620', 134),
('201742222555926', 135),
('201973230122884', 106),
('30094974155670', 103),
('30276803732171', 170),
('30340287940021', 144),
('30380552785537', 111),
('3111442s3WAss3Wa13231', 89),
('3111443W13231', 63),
('311144A3W13231', 66),
('311144s3WAs3Wa13231', 83),
('311144s3WAss3Wa13231', 86),
('311144sWA3Wa13231', 77),
('311144sWAs3Wa13231', 80),
('311144WA3W13231', 70),
('311144WA3Wa13231', 74),
('345742123806482', 155),
('3529480086287653', 131),
('3534198240029943', 171),
('3538608214420858', 129),
('3542101403971653', 107),
('3546477595748182', 154),
('3546768070149619', 99),
('3550629398688360', 123),
('3556568471513034', 101),
('3556598727930443', 139),
('3557461384335480', 130),
('3567858768374035', 160),
('3573734178533811', 145),
('3573856433534720', 167),
('3575793029365821', 141),
('3577333437038674', 169),
('3578415479580355', 148),
('3579777343475834', 162),
('3580150562323928', 142),
('3584591654786959', 117),
('3586602588582766', 147),
('3587986430854468', 157),
('3588397783011269', 102),
('372301540735927', 104),
('372301544651666', 165),
('374622155923005', 173),
('4041592457337', 176),
('4041592847675708', 133),
('4114494106276', 116),
('4175005086559218', 113),
('4508576535790644', 122),
('4508621792987192', 151),
('4518092555694', 138),
('4844176695030528', 140),
('490314660322377222', 105),
('4905861316815425', 146),
('4936383151361671422', 153),
('4936734681059924', 150),
('5002359683414681', 149),
('5018712248241656066', 168),
('5020648585267516269', 152),
('5048370124001264', 121),
('5048373489359129', 164),
('5100130727356944', 114),
('5130904308131726', 112),
('5373869376144677', 159),
('5377016139810816', 115),
('5533427086777455', 128),
('5602210998431072', 118),
('56022157712345408', 143),
('5602246554725838', 161),
('5602247428383507', 100),
('5602252087485700', 174),
('560225723749711379', 125),
('5602257570085276616', 132),
('5610904789816463', 120),
('564182935420361083', 126),
('63041723891424505', 175),
('630434764039918603', 166),
('630489430937137027', 163),
('6333787325939681', 172),
('6334250596584420', 127),
('6374555621356474', 119),
('6377025939483383', 110),
('6385230201382509', 136),
('670658658276168481', 156),
('670967269802183477', 124),
('6759156331248701803', 109),
('6759172540603687908', 108),
('6762792327342363', 137),
('6763060362444356', 158),
('8311143111', 61),
('8311AS143111', 65),
('8311AS1W43111', 68),
('8311S143111', 62),
('83a113Ass2Ss1W43111', 90),
('83a113AssS1W43111', 84),
('83a113AssSs1W43111', 87),
('83a11AS1W43111', 75),
('83a11AsS1W43111', 78),
('83a11AssS1W43111', 81),
('914123413314', 59),
('914123E413314', 64),
('91412A3E413314', 67),
('91412aAW3E413314', 76),
('91412as3AssW3E2413314', 91),
('91412as3AssW3E413314', 88),
('91412as3AsW3E413314', 85),
('91412asAsW3E413314', 82),
('91412asAW3E413314', 79),
('91412AW3E413314', 69);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ims_request`
--

CREATE TABLE `ims_request` (
  `req_id` int(11) NOT NULL,
  `req_description` varchar(100) NOT NULL,
  `req_state` enum('Accepted','Denied','Pending') NOT NULL DEFAULT 'Pending',
  `req_date` datetime(3) NOT NULL,
  `req_type` enum('Low','Transfer') NOT NULL,
  `req_usu_id` int(11) NOT NULL,
  `req_location_id_new` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `ims_request`
--

INSERT INTO `ims_request` (`req_id`, `req_description`, `req_state`, `req_date`, `req_type`, `req_usu_id`, `req_location_id_new`) VALUES
(2, 'string', '', '2023-10-22 00:00:00.000', 'Low', 1, NULL),
(3, 'string', '', '2023-10-22 00:00:00.000', 'Low', 1, NULL),
(4, 'bajas necesarias', '', '2023-10-23 00:00:00.000', 'Low', 2, NULL),
(5, 'string', '', '2023-10-22 00:00:00.000', 'Low', 1, NULL),
(6, 'asdas', 'Pending', '2023-11-23 01:51:09.867', 'Low', 3, NULL),
(7, 'si', 'Pending', '2023-11-23 23:23:19.338', 'Low', 2, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ims_users`
--

CREATE TABLE `ims_users` (
  `usu_id` int(11) NOT NULL,
  `usu_name` varchar(60) NOT NULL,
  `usu_surnames` varchar(60) NOT NULL,
  `usu_email` varchar(60) NOT NULL,
  `usu_role` enum('Admin','User','noRole','Inactive') NOT NULL DEFAULT 'noRole'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `ims_users`
--

INSERT INTO `ims_users` (`usu_id`, `usu_name`, `usu_surnames`, `usu_email`, `usu_role`) VALUES
(1, 'Jose', 'Amador', 'ahhh', 'Admin'),
(2, 'Jose', 'Amador Salazar', 'jose.amador.salazar@est.una.ac.cr', 'Admin'),
(3, 'Usuario1', 'Apellidos1', 'usuario1@ejemplo.com', 'Admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ims_assets`
--
ALTER TABLE `ims_assets`
  ADD PRIMARY KEY (`assets_no`),
  ADD KEY `ims_assets_assent_law_id_fkey` (`assent_law_id`),
  ADD KEY `good_location` (`assets_regis_location`),
  ADD KEY `good_loc_curr` (`assets_curr_location`);

--
-- Indices de la tabla `ims_details_asset`
--
ALTER TABLE `ims_details_asset`
  ADD PRIMARY KEY (`deta_id`),
  ADD KEY `request_details` (`deta_req_id`),
  ADD KEY `assets_details` (`deta_assets_no`);

--
-- Indices de la tabla `ims_institution`
--
ALTER TABLE `ims_institution`
  ADD PRIMARY KEY (`inst_id`);

--
-- Indices de la tabla `ims_laws`
--
ALTER TABLE `ims_laws`
  ADD PRIMARY KEY (`law_id`);

--
-- Indices de la tabla `ims_locations`
--
ALTER TABLE `ims_locations`
  ADD PRIMARY KEY (`location_id`);

--
-- Indices de la tabla `ims_register`
--
ALTER TABLE `ims_register`
  ADD PRIMARY KEY (`reg_id`),
  ADD KEY `sgi_usuario_registro` (`reg_usu_id`),
  ADD KEY `sgi_register_institution` (`reg_inst_id`);

--
-- Indices de la tabla `ims_registered_in`
--
ALTER TABLE `ims_registered_in`
  ADD PRIMARY KEY (`tomo`,`folio`,`asiento`),
  ADD KEY `ims_registered_in_inst_id_fkey` (`inst_id`);

--
-- Indices de la tabla `ims_register_assets`
--
ALTER TABLE `ims_register_assets`
  ADD PRIMARY KEY (`assets_no`,`reg_id`),
  ADD KEY `register_assets_fk02` (`reg_id`);

--
-- Indices de la tabla `ims_request`
--
ALTER TABLE `ims_request`
  ADD PRIMARY KEY (`req_id`),
  ADD KEY `location_request` (`req_location_id_new`),
  ADD KEY `user_request` (`req_usu_id`);

--
-- Indices de la tabla `ims_users`
--
ALTER TABLE `ims_users`
  ADD PRIMARY KEY (`usu_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ims_details_asset`
--
ALTER TABLE `ims_details_asset`
  MODIFY `deta_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `ims_institution`
--
ALTER TABLE `ims_institution`
  MODIFY `inst_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `ims_laws`
--
ALTER TABLE `ims_laws`
  MODIFY `law_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `ims_locations`
--
ALTER TABLE `ims_locations`
  MODIFY `location_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `ims_register`
--
ALTER TABLE `ims_register`
  MODIFY `reg_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=177;

--
-- AUTO_INCREMENT de la tabla `ims_request`
--
ALTER TABLE `ims_request`
  MODIFY `req_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `ims_users`
--
ALTER TABLE `ims_users`
  MODIFY `usu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ims_assets`
--
ALTER TABLE `ims_assets`
  ADD CONSTRAINT `good_loc_curr` FOREIGN KEY (`assets_curr_location`) REFERENCES `ims_locations` (`location_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `good_location` FOREIGN KEY (`assets_regis_location`) REFERENCES `ims_locations` (`location_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ims_assets_assent_law_id_fkey` FOREIGN KEY (`assent_law_id`) REFERENCES `ims_laws` (`law_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `ims_details_asset`
--
ALTER TABLE `ims_details_asset`
  ADD CONSTRAINT `assets_details` FOREIGN KEY (`deta_assets_no`) REFERENCES `ims_assets` (`assets_no`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `request_details` FOREIGN KEY (`deta_req_id`) REFERENCES `ims_request` (`req_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `ims_register`
--
ALTER TABLE `ims_register`
  ADD CONSTRAINT `sgi_register_institution` FOREIGN KEY (`reg_inst_id`) REFERENCES `ims_institution` (`inst_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sgi_usuario_registro` FOREIGN KEY (`reg_usu_id`) REFERENCES `ims_users` (`usu_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `ims_registered_in`
--
ALTER TABLE `ims_registered_in`
  ADD CONSTRAINT `ims_registered_in_inst_id_fkey` FOREIGN KEY (`inst_id`) REFERENCES `ims_institution` (`inst_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `ims_register_assets`
--
ALTER TABLE `ims_register_assets`
  ADD CONSTRAINT `register_assets_fk01` FOREIGN KEY (`assets_no`) REFERENCES `ims_assets` (`assets_no`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `register_assets_fk02` FOREIGN KEY (`reg_id`) REFERENCES `ims_register` (`reg_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `ims_request`
--
ALTER TABLE `ims_request`
  ADD CONSTRAINT `location_request` FOREIGN KEY (`req_location_id_new`) REFERENCES `ims_locations` (`location_id`),
  ADD CONSTRAINT `user_request` FOREIGN KEY (`req_usu_id`) REFERENCES `ims_users` (`usu_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
