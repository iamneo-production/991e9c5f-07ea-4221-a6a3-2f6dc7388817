package main.java.com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Addon;
import com.examly.springapp.service.AddonService;

@RestController
@RequestMapping("/admin")
public class AddonController {

	@Autowired
	private AddonService addonService;
	
	@PostMapping("/addon")
	public ResponseEntity<Addon> addAddon(@RequestBody Addon addon){
		Addon am = addonService.addAddon(addon);
		return new ResponseEntity<>(am,HttpStatus.CREATED);
	}
	@GetMapping("/addon")
	public ResponseEntity<List<Addon>> getAllAddon(){
		List<Addon> am = addonService.getAllAddon();
		return new ResponseEntity<>(am,HttpStatus.OK);
	}
	
	@PutMapping("/addon/{id}")
	public ResponseEntity<Addon> editAddon(@PathVariable("id") int id, @RequestBody Addon addon){
		Addon am = addonService.getAddonById(id);
		if(am!=null) {
			am.setAddonNanme(addon.getAddonNanme());
			am.setAddonPrice(addon.getAddonPrice());
			am.setAddonDetails(addon.getAddonDetails());
			addonService.updateAddon(am);
			return new ResponseEntity<>(am, HttpStatus.OK);
		}else{
			return new ResponseEntity<>(am, HttpStatus.NOT_FOUND);
		}
	}
	@DeleteMapping("/addon/{id}")
	public ResponseEntity<Addon> deleteAddon(@PathVariable("id") int id){
		Addon am = addonService.getAddonById(id);
		if(am!=null) {
			addonService.deleteAddon(id);
			return new ResponseEntity<>(am,HttpStatus.NO_CONTENT);
		}else {
			return new ResponseEntity<>(am,HttpStatus.NOT_FOUND);
		}
		
	}
	
}