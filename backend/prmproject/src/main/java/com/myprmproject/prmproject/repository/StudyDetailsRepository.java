package com.myprmproject.prmproject.repository;

import com.myprmproject.prmproject.modal.StudyDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;



public interface StudyDetailsRepository extends JpaRepository<StudyDetails, Integer> {
}
