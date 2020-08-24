INSERT INTO owners
    (first_name, second_name, title, email, phone, address_firstline, address_secondline, address_city, address_postcode, address_country)
VALUES
    ("Katie", "Stamper", "Lady", "katie@gmail.com", "0121 665544", "Stampnolds Manor", "52 Bristol Northend", "Royal Borough of Kensington and Chelsea", "SE1 10D", "United Kingdom");

INSERT INTO animals
    (microchip_no, owner_id, animal_name)
VALUES
    (7845, 4, "Rupert");

INSERT INTO procedures
    (procedure_name, procedure_date, cost, pet_id)
VALUES
    ("Donate blood", "2020-09-1", -50, 3);