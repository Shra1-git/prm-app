package com.myprmproject.prmproject;

import com.myprmproject.prmproject.modal.StudyDetails;
import com.myprmproject.prmproject.repository.StudyDetailsRepository;
import com.myprmproject.prmproject.service.StudyDetailsService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Date;

@SpringBootTest
class PrmprojectApplicationTests {

	private final StudyDetailsService studyDetailsService;

	@MockBean
	private final StudyDetailsRepository studyDetailsRepository;

	@Autowired
	PrmprojectApplicationTests(StudyDetailsService thestudyDetailsService, StudyDetailsRepository theStudyDetailsRepository){
		this.studyDetailsService = thestudyDetailsService;
		this.studyDetailsRepository = theStudyDetailsRepository;

	}

	@Test
	void teststudydetailssaving() {
//		StudyDetails sd =  new StudyDetails();
//		sd.setStudyDetailsId(15);
//
//		studyDetailsService.save(sd);
//
//		Assertions.assertEquals(1, studyDetailsService.findAll().size());


	}

}
