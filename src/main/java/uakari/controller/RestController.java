package uakari.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.*;
import uakari.dto.HtmlTemplateDto;
import uakari.model.HtmlTemplate;
import uakari.model.HtmlTemplateRepository;

import java.util.List;

@org.springframework.web.bind.annotation.RestController
@RequestMapping("/rest/")
public class RestController {

    @Autowired
    HtmlTemplateRepository htmlTemplateRepository;

    @GetMapping("/htmlTemplate")
    public List<HtmlTemplate> getHtmlTemplatesForUser(@RequestParam("userId") String userId) {
        return htmlTemplateRepository.findByUserId(userId);
    }

    @PostMapping("/htmlTemplate")
    public boolean createHtmlTemplate(@RequestBody HtmlTemplateDto htmlTemplateDto) throws MissingServletRequestParameterException {

        if (htmlTemplateDto.getUserId().isEmpty()) {
            throw new MissingServletRequestParameterException("userId", "String");
        }

        HtmlTemplate htmlTemplate = new HtmlTemplate(htmlTemplateDto.getUserId(), htmlTemplateDto.getHtml(), htmlTemplateDto.getName());
        htmlTemplateRepository.save(htmlTemplate);

        return true;
    }

}
