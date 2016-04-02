package net.codeoftheday.template.config;

import java.io.File;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

@Configuration
public class WebAppConfiguration implements EmbeddedServletContainerCustomizer {

   private static Logger LOGGER = LoggerFactory.getLogger(WebAppConfiguration.class);

   @Autowired
   private Environment env;

   @Override
   public void customize(final ConfigurableEmbeddedServletContainer container) {
      final File webAppRoot = getWebAppRoot(env);

      if (webAppRoot.exists() && webAppRoot.isDirectory()) {
         LOGGER.debug("Using '{}' as WebApp-Root-Directory.", webAppRoot.getAbsolutePath());
         container.setDocumentRoot(webAppRoot);
         return;
      }

      // If the path does not exists the default "./" will be used.
   }

   private File getWebAppRoot(final Environment environment) {
      if (env.acceptsProfiles(Constants.SPRING_PROFILE_PRODUCTION)) {
         return new File("target/dist/");
      }

      return new File("src/main/webapp/");
   }

}
