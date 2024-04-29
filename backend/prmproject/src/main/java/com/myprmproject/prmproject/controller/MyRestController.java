package com.myprmproject.prmproject.controller;


import com.myprmproject.prmproject.dto.StudyDetailsDto;
import com.myprmproject.prmproject.modal.StudyDetails;
import com.myprmproject.prmproject.service.StudyDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/prm")

public class MyRestController {


    private StudyDetailsService studyDetailsService;


    @Autowired
    public MyRestController(StudyDetailsService thestudyDetailsService){
        this.studyDetailsService = thestudyDetailsService;
    }
    @GetMapping("/")
    public String mydefault(){
        return "Default path";
    }
    @GetMapping("/hello")
    public String hello(){
        return "Hello World";
    }

    @GetMapping("/studydetails")
    public List<StudyDetails> findAll(){
        return studyDetailsService.findAll();

    }

    @GetMapping("/studydetails/{studydetailsId}")
    public StudyDetails getStudyDetails(@PathVariable int studydetailsId){
        StudyDetails newStudyDetails = studyDetailsService.findById(studydetailsId);
        if(newStudyDetails==null){
            throw new RuntimeException("StudyDetails id not found--" + studydetailsId);
        }
        return newStudyDetails;
    }

    @PostMapping("/studydetails")
    public StudyDetails addStudyDetails(@RequestBody StudyDetails myStudyDetails){
        myStudyDetails.setStudyDetailsId(0);
        StudyDetails newStudyDetails =  studyDetailsService.save(myStudyDetails);

        return newStudyDetails;
    }

    @PutMapping("/studydetails")
    public StudyDetails updateStudyDetails(@RequestBody StudyDetails myStudyDetails){

        StudyDetails newStudyDetails = studyDetailsService.save(myStudyDetails);
        return newStudyDetails;
    }

    @DeleteMapping("/studydetails/{studydetailsId}")
    public void deleteStudyDetails(@PathVariable int studydetailsId){
        StudyDetails newStudyDetails = studyDetailsService.findById(studydetailsId);
        if(newStudyDetails==null){
            throw new RuntimeException("StudyDetails id not found--" + studydetailsId);
        }
        studyDetailsService.deleteById(studydetailsId);
    }
}
