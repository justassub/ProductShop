package lt.it.akademija.Useriai;


import io.swagger.annotations.ApiOperation;

import lt.it.akademija.CreateProductCommand;
import lt.it.akademija.Product;
import lt.it.akademija.ProductRepository;
import lt.it.akademija.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/produktai")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private final UserServices userServices;
    private String prisijungesVartotojas;
    @Autowired
    public UserController(UserServices userServices ) {
        this.userServices=userServices;
    }


    @RequestMapping(path = "/user/{nickname}", method= RequestMethod.POST)
    @ApiOperation(value="Add Product for user" )
    public void createUser( @PathVariable String nickname) {
        prisijungesVartotojas=nickname;
        if (userServices.userExists(nickname)){

        }else {
            userServices.createUser(nickname);
        }

    }




    @RequestMapping(path = "/buy/{id}", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void addToCart(@PathVariable final Long id) {
        userServices.UsersProducts(id,prisijungesVartotojas);
    }

    @RequestMapping(path = "/user/cart", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public List<Product> findUserProducts() {
        User prisijungesUser=userServices.findUser(prisijungesVartotojas);
        return prisijungesUser.getProducts();
    }
    @RequestMapping(path = "/user/cart/remove/{id}", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void removeFromCart(@PathVariable final Long id) {
        System.out.println("Deletinama preke is krepselio");
        userServices.deleteProductFromUser(id,prisijungesVartotojas);
    }









}
