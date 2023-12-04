create table if not exists planets (
	id serial primary key,
  name varchar(255),
  coord varchar(255),
  situation varchar(12) not null,
  satellite varchar(255)
);