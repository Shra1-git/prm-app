package com.myprmproject.prmproject.service;

import com.myprmproject.prmproject.modal.StudyDetails;
import com.myprmproject.prmproject.repository.StudyDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudyDetailsServiceImpl implements StudyDetailsService{

    private StudyDetailsRepository mystudyRepo;

    @Autowired
    public StudyDetailsServiceImpl(StudyDetailsRepository thestudyRepo) {
        this.mystudyRepo = thestudyRepo;
    }


    @Override
    public List<StudyDetails> findAll(){
        return mystudyRepo.findAll();
    }

    @Override
    public StudyDetails findById(int id){
        Optional<StudyDetails> result = mystudyRepo.findById(id);

        StudyDetails theStudyDetails = null;
        if(result.isPresent()){
            theStudyDetails = result.get();
        }
        else{
            throw new RuntimeException("i CANOT FIND StudyDetails ID--" + id);
        }

        return theStudyDetails;
    }

    @Override
    public StudyDetails save(StudyDetails myStudyDetails){
        mystudyRepo.save(myStudyDetails);
        return myStudyDetails;
    }

    public void deleteById(int id){
        mystudyRepo.deleteById(id);
    }
}
