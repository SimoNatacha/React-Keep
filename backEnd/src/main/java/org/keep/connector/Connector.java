package org.keep.connector;

import org.hibernate.SessionFactory;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

public class Connector {
    public static SessionFactory sessionFactory = null;

    public static void setUp() {
        final StandardServiceRegistry registry = new StandardServiceRegistryBuilder().configure().build();

        try {

            sessionFactory = new MetadataSources(
                    registry
            ).buildMetadata().buildSessionFactory();
        }
        catch (Exception e){
            StandardServiceRegistryBuilder.destroy(registry);
            throw new RuntimeException(e);
        }

    }

    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    //    SessionFactory sessionFactory = new MetadataSources(registry).buildMetadata().buildSessionFactory();
//    SessionFactory sessionFactory = new Configuration().configure().buildSessionFactory();

}