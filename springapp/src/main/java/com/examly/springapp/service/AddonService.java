package com.examly.springapp.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.examly.springapp.model.Addon;
import com.examly.springapp.repository.AddonRepository;

@Service
public class AddonService {
	
	@Autowired
	private AddonRepository addonRepo;
	
	public Addon addAddon(Addon addon) {
		return addonRepo.save(addon);
	}
	public List<Addon> getAllAddon(){
		return addonRepo.findAll();
	}
	public Addon getAddonById(int id) {
		return addonRepo.findById(id).get();
	}
	public void updateAddon(Addon addon) {
		addonRepo.save(addon);
	}
	public void deleteAddon(int id) {
		addonRepo.deleteById(id);
	}
}
