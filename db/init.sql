DROP TABLE IF EXISTS grades;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE grades (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  subject VARCHAR(100) NOT NULL,
  grade NUMERIC(3,1) NOT NULL
);

INSERT INTO users (email, password)
VALUES
  ('estudiante@demo.com', '1234'),
  ('ana@demo.com', '1234');

INSERT INTO grades (user_id, subject, grade)
VALUES
  (1, 'Matemáticas', 4.5),
  (1, 'Programación', 4.8),
  (1, 'Bases de Datos', 4.2),
  (2, 'Matemáticas', 3.9),
  (2, 'Programación', 4.1),
  (2, 'Bases de Datos', 4.7);