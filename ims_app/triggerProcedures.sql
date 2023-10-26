DELIMITER //
CREATE DEFINER=`root`@`localhost` PROCEDURE `increment_register_in`()
BEGIN
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

END//
DELIMITER ;



DELIMITER //
CREATE TRIGGER insert_register_in BEFORE INSERT ON ims_register
FOR EACH ROW
BEGIN
    DECLARE tomo_actual INT;
    DECLARE folio_actual INT;
    DECLARE asiento_actual INT;

    SELECT tomo, folio, asiento INTO tomo_actual, folio_actual, asiento_actual
    FROM ims_registered_in
    LIMIT 1;

    IF tomo_actual IS NULL THEN
        SET tomo_actual = 1;
        SET folio_actual = 1;
        SET asiento_actual = 1;
    END IF;

    SET NEW.reg_tomo = tomo_actual;
    SET NEW.reg_folio = folio_actual;
    SET NEW.reg_asiento = asiento_actual;
END;
//
DELIMITER ;


DELIMITER //
CREATE TRIGGER `After_insert_register_in` AFTER INSERT ON `ims_register`
 FOR EACH ROW BEGIN
    CALL increment_register_in();
END
//
DELIMITER ;
