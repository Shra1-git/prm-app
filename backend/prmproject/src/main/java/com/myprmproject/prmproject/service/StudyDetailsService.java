package com.myprmproject.prmproject.service;

import com.myprmproject.prmproject.modal.StudyDetails;

import java.util.List;

public interface StudyDetailsService {

    public List<StudyDetails> findAll();

    public StudyDetails findById(int id);

    public StudyDetails save(StudyDetails myEmployee);


    public void deleteById(int id);
}
