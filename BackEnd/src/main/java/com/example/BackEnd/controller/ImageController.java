package com.example.BackEnd.controller;

import com.example.BackEnd.entity.Image;
import com.example.BackEnd.repository.ImageRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/images")
@Slf4j
@CrossOrigin("*")
public class ImageController {

    @Autowired
    private ImageRepository imageRepository;

    @PostMapping
    public ResponseEntity<Image> saveImage(@RequestBody Image image) {
        Image savedImage = imageRepository.save(image);
        log.info("Image saved: {}", savedImage);
        return new ResponseEntity<>(savedImage, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Image>> getAllImages() {
        List<Image> images = imageRepository.findAll();
        images.forEach(image -> log.info("Image: {}", image));
        return new ResponseEntity<>(images, HttpStatus.OK);
    }
}