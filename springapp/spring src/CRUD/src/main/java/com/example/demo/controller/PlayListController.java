package com.example.demo.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entity.PlayList;
import com.example.demo.repository.PlayListRepo;
@RequestMapping("/api/v1/user")
@RestController
public class PlayListController {
	@Autowired
	public PlayListRepo play;
	@PostMapping("/p")
	public ResponseEntity<String> saveDet(@RequestBody PlayList e) {
		play.save(e);
		return  ResponseEntity.ok("Data Added");
	}
	@GetMapping("/getplay")
	public List<PlayList> getDetails() {
		return play.findAll();
	}
	@PutMapping("/putplay")
	public PlayList updateDetails(@RequestBody PlayList p1) {
		return play.saveAndFlush(p1);
	}
	@DeleteMapping("/deleteplay/{id}")
	public String deleteDetails(@PathVariable("id") int id) {
		play.deleteById(id);
		return "Deleted Content with id:"+id;
	}
}