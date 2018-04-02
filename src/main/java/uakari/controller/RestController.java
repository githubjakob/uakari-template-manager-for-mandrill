package uakari.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import uakari.dto.AccountDto;
import uakari.model.Account;
import uakari.model.AccountRepository;

import java.util.List;

@org.springframework.web.bind.annotation.RestController
@RequestMapping("/rest/")
public class RestController {

    @Autowired
    AccountRepository accountRepository;

    @GetMapping("/account")
    public List<Account> getAccounts() {
        return accountRepository.findAll();
    }

    @PostMapping("/account")
    public boolean createAccount(@RequestBody AccountDto accountDto) {

        Account account = new Account(accountDto.getApiKey());
        accountRepository.save(account);

        return true;
    }

}
