CREATE TABLE packaging_styles (
  id SERIAL PRIMARY KEY,
  packaging_style TEXT UNIQUE NOT NULL
);

INSERT INTO packaging_styles
VALUES
(DEFAULT, 'Pack'),
(DEFAULT, 'Bowl'),
(DEFAULT, 'Cup'),
(DEFAULT, 'Tray'),
(DEFAULT, 'Box'),
(DEFAULT, 'Bar'),
(DEFAULT, 'Can'),
(DEFAULT, 'Restaurant');
