package net.codeoftheday.template;

import java.util.Arrays;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.env.Environment;
import org.springframework.core.env.SimpleCommandLinePropertySource;

import net.codeoftheday.template.config.Constants;

@SpringBootApplication
public class AngularSprintTemplateApplication implements CommandLineRunner {
   private static final Logger LOGGER = LoggerFactory.getLogger(AngularSprintTemplateApplication.class);

   @Autowired
   private Environment env;

   public static void main(final String... args) {
      final SpringApplication app = new SpringApplication(AngularSprintTemplateApplication.class);

      // If no profile is set, 'dev' will be used.
      addDefaultProfile(app, args);
      app.run(args);
   }

   @Override
   public void run(final String... args) throws Exception {
      LOGGER.info("Running with active profiles: '{}'", Arrays.toString(env.getActiveProfiles()));
   }

   private static void addDefaultProfile(final SpringApplication app, final String... args) {
      final SimpleCommandLinePropertySource argsSource = new SimpleCommandLinePropertySource(args);
      if (!argsSource.containsProperty("spring.profiles.active") &&
          System.getProperty("spring.profiles.active") == null) {
         app.setAdditionalProfiles(Constants.SPRING_PROFILE_DEVELOPMENT);
      }
   }
}
