package uakari;

import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;
import org.thymeleaf.messageresolver.StandardMessageResolver;
import org.thymeleaf.templatemode.TemplateMode;
import org.thymeleaf.templateresolver.StringTemplateResolver;

import java.io.StringWriter;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.Properties;

/**
 * Created by jakob on 31.03.18.
 */
public class ThymeleafTemplateEngine {

    public static void main(String[] args) {
        process();
    }

    public static boolean process() {

        TemplateEngine templateEngine = new TemplateEngine();

        Context context = new Context();
        context.setLocale(Locale.GERMAN);

        Map<String, String> dict = new HashMap<String, String>();
        dict.put("home.welcome", "test");

        Properties properties = new Properties();
        properties.putAll(dict);

        StandardMessageResolver messageResolver = new StandardMessageResolver();
        messageResolver.setDefaultMessages(properties);

        StringTemplateResolver stringTemplateResolver = new StringTemplateResolver();
        stringTemplateResolver.setTemplateMode(TemplateMode.HTML);

        templateEngine.setTemplateResolver(stringTemplateResolver);
        templateEngine.setMessageResolver(messageResolver);

        String template = "<!DOCTYPE html>\n" +
                "\n" +
                "<html xmlns:th=\"http://www.thymeleaf.org\">\n" +
                "\n" +
                "  <body>\n" +
                "  \n" +
                "    <p th:text=\"#{home.welcome}\">Welcome to our grocery store!</p>\n" +
                "  \n" +
                "  </body>\n" +
                "\n" +
                "</html>";

        StringWriter writer = new StringWriter();

        templateEngine.process(template, context, writer);

        String theString = writer.toString();


        System.out.println(theString);

        return true;

    }

}
