package com.legado.appventa.config;

import java.util.Properties;

import javax.sql.DataSource;

import org.apache.commons.dbcp.BasicDataSource;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.orm.hibernate5.HibernateExceptionTranslator;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
public class DataConfig {

    private static final Logger log = LoggerFactory.getLogger(DataConfig.class);

    @Autowired
    private SessionFactory sessionFactory ;

    @Bean
    public PlatformTransactionManager transactionManager() {
        return new HibernateTransactionManager(sessionFactory);
    }

    @Bean
    public HibernateExceptionTranslator hibernateExceptionTranslator() {
        return new HibernateExceptionTranslator();
    }

    @Configuration
    @Import(PropertyPlaceHolderConfig.class)
    static class Production {

        @Value("${spring.jpa.show-sql}")
        protected String hibernateShowSql;
        @Value("${spring.jpa.database-platform}")
        protected String hibernateDialect;
//        @Value("${hibernate.hbm2ddl.auto}")
//        protected String hibernateHbm2DDL;
        @Value("${spring.jpa.properties.hibernate.cache.use_second_level_cache}")
        protected String hibernateSecondLevelCache;
        @Value("${spring.jpa.properties.hibernate.cache.region.factory_class}")
        protected String hibernateCacheClass;
//        @Value("${hibernate.default_schema}")
//        protected String hibernateSchema;
        @Value("${spring.datasource.driverClassName}")
        protected String jdbcDriver;
        @Value("${spring.datasource.username}")
        protected String jdbcUsername;
        @Value("${spring.datasource.password}")
        protected String jdbcPassword;
        @Value("${spring.datasource.url}")
        protected String jdbcUrl;

        @Bean
        public SessionFactory sessionFactory() {

            LocalSessionFactoryBean factoryBean;
            try {
                factoryBean = new LocalSessionFactoryBean();
                Properties pp = new Properties();
                pp.setProperty("spring.jpa.show-sql", hibernateShowSql);
                //pp.setProperty("hibernate.hbm2ddl.auto", hibernateHbm2DDL);
                pp.setProperty("spring.jpa.properties.hibernate.cache.use_second_level_cache", hibernateSecondLevelCache);
                pp.setProperty("spring.jpa.properties.hibernate.cache.region.factory_class", hibernateCacheClass);
                //pp.setProperty("hibernate.default_schema", hibernateSchema);
               //  pp.setProperty("hibernate.dialect", hibernateDialect);
                factoryBean.setDataSource(dataSource());
                factoryBean.setPackagesToScan("com.legado");
                factoryBean.setHibernateProperties(pp);
                factoryBean.afterPropertiesSet();
                return factoryBean.getObject();
            } catch (Exception e) {
                log.error("Couldn't configure the sessionFactory bean", e);
            }
            throw new RuntimeException("Couldn't configure the sessionFactory bean");
        }

        @Bean
        public DataSource dataSource() {

          String jdbcUrlEnv = System.getenv("JDBC_DATABASE_URL");
          String jdbcUsernameEnv = System.getenv("JDBC_DATABASE_USERNAME");
             String jdbcPasswordEnv = System.getenv("JDBC_DATABASE_PASSWORD");
            BasicDataSource ds = new BasicDataSource();
            ds.setDriverClassName(jdbcDriver);
            if(jdbcUrlEnv==null){

                ds.setUsername(jdbcUsername);
                ds.setPassword(jdbcPassword);
                ds.setUrl(jdbcUrl);
            }else{

                ds.setUsername(jdbcUsernameEnv);
                ds.setPassword(jdbcPasswordEnv);
                ds.setUrl(jdbcUrlEnv);
            }



            
            ds.setInitialSize(5);
            ds.setMaxActive(10);
            ds.setRemoveAbandoned(true);
            ds.setLogAbandoned(true);
          //  ds.setValidationQuery("SELECT 1");
            return ds;
        }
    }
 
}

