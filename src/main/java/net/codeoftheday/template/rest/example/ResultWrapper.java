package net.codeoftheday.template.rest.example;

import java.util.HashMap;

public final class ResultWrapper extends HashMap<String, Object> {

   private static final long serialVersionUID = -6094091850547925465L;

   private ResultWrapper(final String key, final Object value) {
      super(1);

      put(key, value);
   }

   public static ResultWrapper wrap(final String key, final Object value) {
      return new ResultWrapper(key, value);
   }

}
