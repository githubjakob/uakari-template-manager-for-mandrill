package uakari.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.*;
import uakari.dto.HtmlTemplateDto;
import uakari.dto.TextStringsDto;
import uakari.model.HtmlTemplate;
import uakari.model.HtmlTemplateRepository;
import uakari.model.TextString;
import uakari.model.TextStringRepository;

import java.util.Arrays;
import java.util.List;

@org.springframework.web.bind.annotation.RestController
@RequestMapping("/rest/")
public class RestController {

    @Autowired
    HtmlTemplateRepository htmlTemplateRepository;

    @Autowired
    TextStringRepository textStringRepository;

    @GetMapping("/htmlTemplate")
    public List<HtmlTemplate> getHtmlTemplatesForUser(@RequestParam("userId") String userId) {
        return htmlTemplateRepository.findByUserId(userId);
    }

    @GetMapping("/htmlTemplate/{templateName}")
    public String getHtmlTemplateForUserByName(@RequestParam("userId") String userId, @PathVariable String templateName) {
        return htmlTemplateRepository.findByUserIdAndName(userId, templateName).getHtml();
    }

    @PostMapping("/htmlTemplate")
    public boolean createHtmlTemplate(@RequestBody HtmlTemplateDto htmlTemplateDto) throws MissingServletRequestParameterException {

        if (htmlTemplateDto.getUserId() == null) {
            throw new MissingServletRequestParameterException("userId", "String");
        }

        HtmlTemplate htmlTemplate = new HtmlTemplate(htmlTemplateDto.getUserId(), htmlTemplateDto.getHtml(), htmlTemplateDto.getName());
        htmlTemplateRepository.save(htmlTemplate);

        return true;
    }

    @PostMapping("/textStrings")
    public boolean addTextStrings(@RequestBody TextStringsDto textStrings) {



        //System.out.println(Arrays.toString(textStrings.getNameAndText().entrySet().toArray()));


        return true;
    }

    @GetMapping("/textStrings")
    public List<TextString> getTextStrings(@RequestParam("userId") String userId) {

        return textStringRepository.findByUserId(userId);
    }

}
