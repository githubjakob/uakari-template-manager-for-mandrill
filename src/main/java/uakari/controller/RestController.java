package uakari.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import uakari.Account;
import uakari.AccountRepository;

import java.util.List;

@org.springframework.web.bind.annotation.RestController
@RequestMapping("/rest/")
public class RestController {

    @Autowired
    AccountRepository repository;

    @GetMapping("/account")
    public List<Account> getAccount() {
        return repository.findAll();
    }

    @PostMapping("/account")
    public String greeting(@RequestBody Account account) {


        return account.getId() + " asdfsa " + account.getApiKey();
    }

}
