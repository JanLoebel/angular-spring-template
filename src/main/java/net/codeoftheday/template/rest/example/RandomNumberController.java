package net.codeoftheday.template.rest.example;

import java.security.SecureRandom;
import java.util.Random;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/random")
@RestController
public class RandomNumberController {

   private static final Logger LOGGER = LoggerFactory.getLogger(RandomNumberController.class);

   private static final Random random = new SecureRandom();

   @RequestMapping(method = RequestMethod.GET)
   public ResultWrapper getRandom() {
      final int randomNumber = random.nextInt();

      LOGGER.debug("Random number is: '{}'.", randomNumber);

      return ResultWrapper.wrap("randomNumber", randomNumber);
   }

}
