package lt.it.akademija.Services;

import lt.it.akademija.CreateProductCommand;
import lt.it.akademija.Product;
import lt.it.akademija.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class ProductServices {
    @Autowired
    ProductRepository repository;



    @Transactional
    public List<Product> getAll(){
        return  repository.findAll();
    }

    @Transactional
    public List<Product> getOneList(long id){
        return repository.findProductById(id);
    }

    @Transactional
    public Product getOne(long id){
        return repository.findById(id);
    }

    @Transactional
    public void saveProduct(@RequestBody CreateProductCommand cpc){
        Product kuriamasProduktas = new Product(cpc.getTitle(),cpc.getImage(),cpc.getDescription(),cpc.getPrice(),cpc.getQuantity());
        repository.save(kuriamasProduktas);
    }

    @Transactional
    public void updateProduct(Long id, @RequestBody CreateProductCommand cpc){
        Product keiciamasProduktas = getOne(id);
        keiciamasProduktas.setTitle(cpc.getTitle());
        keiciamasProduktas.setImage(cpc.getImage());
        keiciamasProduktas.setDescription(cpc.getDescription());
        keiciamasProduktas.setPrice(cpc.getPrice());
        keiciamasProduktas.setQuantity(cpc.getQuantity());
        repository.save(keiciamasProduktas);
    }

    @Transactional
    public  void deleteProduct(Long id){
        Product trinamasProduktas= getOne(id);
        repository.delete(trinamasProduktas);
    }









}
