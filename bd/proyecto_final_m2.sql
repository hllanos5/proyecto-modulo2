-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-07-2024 a las 19:08:45
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto_final_m2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id_categoria` bigint(20) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `estado` int(1) DEFAULT 1,
  `create_at` datetime DEFAULT current_timestamp(),
  `update_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id_categoria`, `nombre`, `estado`, `create_at`, `update_at`) VALUES
(1, 'Exterior Signage', 1, '2024-07-25 12:19:46', '2024-07-25 12:19:46'),
(2, 'Glass & Glazing', 1, '2024-07-25 12:19:46', '2024-07-25 12:19:46'),
(3, 'Wall Protection', 0, '2024-07-25 12:19:46', '2024-07-25 12:19:52');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria_publicacion`
--

CREATE TABLE `categoria_publicacion` (
  `id_categoria_publicacion` bigint(20) NOT NULL,
  `id_publicacion` bigint(20) DEFAULT NULL,
  `id_categoria` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categoria_publicacion`
--

INSERT INTO `categoria_publicacion` (`id_categoria_publicacion`, `id_publicacion`, `id_categoria`) VALUES
(1, 4, 2),
(2, 5, 3),
(3, 1, 2),
(4, 2, 3),
(5, 1, 3),
(6, 2, 2),
(7, 2, 3),
(8, 6, 1),
(9, 10, 2),
(10, 8, 1),
(11, 14, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario`
--

CREATE TABLE `comentario` (
  `id_comentario` bigint(20) NOT NULL,
  `id_publicacion` bigint(20) DEFAULT NULL,
  `id_usuario` bigint(20) DEFAULT NULL,
  `comentario` text DEFAULT NULL,
  `estado` int(1) DEFAULT 1,
  `create_at` datetime DEFAULT current_timestamp(),
  `update_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comentario`
--

INSERT INTO `comentario` (`id_comentario`, `id_publicacion`, `id_usuario`, `comentario`, `estado`, `create_at`, `update_at`) VALUES
(1, 10, 2, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.', 1, '2024-07-26 11:07:23', '2024-07-26 11:07:23'),
(2, 3, 2, 'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, '2024-07-26 11:07:23', '2024-07-26 11:07:23'),
(3, 4, 2, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.', 1, '2024-07-26 11:07:23', '2024-07-26 11:07:23'),
(4, 4, 2, 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2024-07-26 11:07:23', '2024-07-26 11:07:23'),
(5, 10, 3, 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.', 1, '2024-07-26 11:07:23', '2024-07-26 11:07:23'),
(6, 3, 2, 'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.', 1, '2024-07-26 11:07:23', '2024-07-26 11:07:23'),
(7, 4, 2, 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2024-07-26 11:07:23', '2024-07-26 11:07:23'),
(8, 10, 2, 'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.', 1, '2024-07-26 11:07:23', '2024-07-26 11:07:23'),
(9, 8, 2, 'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.', 1, '2024-07-26 11:07:23', '2024-07-26 11:07:23'),
(10, 4, 2, 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.', 1, '2024-07-26 11:07:23', '2024-07-26 11:07:23'),
(11, 8, 2, 'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.', 1, '2024-07-26 11:07:23', '2024-07-26 11:07:23'),
(12, 2, 2, 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.', 1, '2024-07-26 11:07:23', '2024-07-26 11:07:23'),
(13, 4, 3, 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.', 1, '2024-07-26 11:07:23', '2024-07-26 11:07:23'),
(14, 2, 2, 'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, '2024-07-26 11:07:23', '2024-07-26 11:07:23'),
(15, 5, 2, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.', 1, '2024-07-26 11:07:23', '2024-07-26 11:07:23'),
(16, 8, 3, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '2024-07-26 11:07:23', '2024-07-26 11:07:23'),
(17, 2, 2, 'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.', 1, '2024-07-26 11:07:23', '2024-07-26 11:07:23'),
(18, 9, 2, 'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, '2024-07-26 11:07:23', '2024-07-26 11:07:23'),
(19, 4, 3, 'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.', 1, '2024-07-26 11:07:23', '2024-07-26 11:07:23'),
(20, 7, 2, 'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.', 1, '2024-07-26 11:07:23', '2024-07-26 11:07:23'),
(21, 1, 1, 'comentario123', 0, '2024-07-26 11:12:17', '2024-07-26 11:56:40');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicacion`
--

CREATE TABLE `publicacion` (
  `id_publicacion` bigint(20) NOT NULL,
  `id_usuario` bigint(20) DEFAULT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `estado` int(1) DEFAULT 1,
  `create_at` datetime DEFAULT current_timestamp(),
  `update_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `publicacion`
--

INSERT INTO `publicacion` (`id_publicacion`, `id_usuario`, `titulo`, `descripcion`, `estado`, `create_at`, `update_at`) VALUES
(1, 2, 'Leaving Normal', 'Perc extrac com duc calc', 1, '2024-07-26 09:05:38', '2024-07-26 09:05:38'),
(2, 3, 'Ballou', 'Carotid pulse tracing', 1, '2024-07-26 09:05:38', '2024-07-26 09:05:38'),
(3, 2, 'Mother Carey\'s Chickens', 'Tot rep truncus arterios', 1, '2024-07-26 09:05:38', '2024-07-26 09:05:38'),
(4, 2, 'She Monkeys', 'Hemorrhoidectomy', 1, '2024-07-26 09:05:38', '2024-07-26 09:05:38'),
(5, 2, 'Chorus, The (Hamsarayan)', 'Small bowel series', 1, '2024-07-26 09:05:38', '2024-07-26 09:05:38'),
(6, 2, 'Driving Lessons', 'Cysto & recto w grf/pros', 1, '2024-07-26 09:05:38', '2024-07-26 09:05:38'),
(7, 2, 'Hostile Intentions', 'Insert ves-to-ves cannul', 1, '2024-07-26 09:05:38', '2024-07-26 09:05:38'),
(8, 3, 'From Dusk Till Dawn 2: Texas Blood Money ', 'Biliary tract x-ray NEC', 1, '2024-07-26 09:05:38', '2024-07-26 09:05:38'),
(9, 3, 'Limitless', 'Cannulation pancrea duc', 1, '2024-07-26 09:05:38', '2024-07-26 09:05:38'),
(10, 2, 'Jealousy', 'Root canal NOS', 1, '2024-07-26 09:05:38', '2024-07-26 09:05:38'),
(11, 2, 'Titulo1', 'Descripcion1', 0, '2024-07-26 09:05:51', '2024-07-26 09:06:07'),
(12, 2, 'titulo11', 'descripcion11', 1, '2024-07-26 10:03:01', '2024-07-26 10:15:06'),
(13, 2, 'Titulo11', 'Descripcion11', 1, '2024-07-26 10:04:30', '2024-07-26 10:04:30'),
(14, 2, 'titulo11', 'descripcion11', 1, '2024-07-26 10:04:44', '2024-07-26 10:16:04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id_rol` bigint(20) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `estado` int(1) DEFAULT 1,
  `create_at` datetime DEFAULT current_timestamp(),
  `update_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id_rol`, `nombre`, `estado`, `create_at`, `update_at`) VALUES
(1, 'administrador', 1, '2024-07-25 09:48:59', '2024-07-25 09:48:59'),
(2, 'usuario', 1, '2024-07-25 09:48:59', '2024-07-25 09:48:59'),
(3, 'nombre11', 0, '2024-07-25 10:29:40', '2024-07-25 11:02:49');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` bigint(20) NOT NULL,
  `id_rol` bigint(20) DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  `estado` int(1) DEFAULT 1,
  `create_at` datetime DEFAULT current_timestamp(),
  `update_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `id_rol`, `nombre`, `apellido`, `email`, `password`, `estado`, `create_at`, `update_at`) VALUES
(1, 1, 'Admin', 'Admin', 'admin@controlaya.com', 'Admin123x*', 1, '2024-07-24 20:38:41', '2024-07-24 20:38:41'),
(2, 2, 'Hans', 'Llanos', 'hllanos@controlaya.com', 'Hans123x*', 1, '2024-07-24 20:38:41', '2024-07-24 20:38:41'),
(3, 2, 'Josue', 'Huancapaza', 'jhuancapaza@controlaya.com', 'Josue123x*', 1, '2024-07-24 20:38:41', '2024-07-24 20:38:41'),
(4, 1, 'nombre11', 'apellido11', 'prueba11@gmail.com', 'password123x*', 0, '2024-07-24 20:43:09', '2024-07-25 09:35:17');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `categoria_publicacion`
--
ALTER TABLE `categoria_publicacion`
  ADD PRIMARY KEY (`id_categoria_publicacion`);

--
-- Indices de la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`id_comentario`);

--
-- Indices de la tabla `publicacion`
--
ALTER TABLE `publicacion`
  ADD PRIMARY KEY (`id_publicacion`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_categoria` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `categoria_publicacion`
--
ALTER TABLE `categoria_publicacion`
  MODIFY `id_categoria_publicacion` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `comentario`
--
ALTER TABLE `comentario`
  MODIFY `id_comentario` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `publicacion`
--
ALTER TABLE `publicacion`
  MODIFY `id_publicacion` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id_rol` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
