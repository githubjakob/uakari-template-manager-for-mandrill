package uakari;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by jakob on 30.03.18.
 */
@Controller
public class HomeController {
    @RequestMapping(value = "/")
    public String index() {
        return "index.html";
    }
}

