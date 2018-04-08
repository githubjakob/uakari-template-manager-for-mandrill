package uakari.dto;

import lombok.Getter;
import lombok.Setter;
import uakari.model.TextString;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by jakob on 07.04.18.
 */
public class TextStringsDto {

    public TextStringsDto() {
        this.nameAndText = new ArrayList<>();
    }

    @Getter
    List<TextString> nameAndText;

    public void addNewKeyValuePair(TextString textString) {
        this.nameAndText.add(textString);
    }

}
