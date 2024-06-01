# Use the official MariaDB image from the Docker Hub
FROM docker.io/mariadb:10

# Set environment variables for MariaDB
ENV MYSQL_ROOT_PASSWORD=VdZDPFXDxpedA123
ENV MYSQL_DATABASE=management
ENV MYSQL_USER= root
ENV MYSQL_PASSWORD=VdZDPFXDxpedA123

# Expose the default MariaDB port
EXPOSE 3306

# Add the initialization script if you have one
COPY management.sql /docker-entrypoint-initdb.d/

# Run the MariaDB server
CMD ["mysqld"]
