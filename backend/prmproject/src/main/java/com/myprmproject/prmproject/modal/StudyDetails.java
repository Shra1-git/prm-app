package com.myprmproject.prmproject.modal;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name="prm_form_table")
@Data
public class StudyDetails {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id")
    private int studyDetailsId;

    @Column(name="platform")
    private String platform;

    @Column(name="rag_status")
    private String ragStatus;

    @Column(name="study_status")
    private String studyStatus;

    @Column(name="project_code")
    private String projectCode;

    @Column(name="sponsor_name")
    private String sponsorName;

    @Column(name="protocol_number")
    private String protocolNumber;

    @Column(name="lead_programmer")
    private String leadProgrammer;

    @Column(name="clinical_research_lead")
    private String clinicalResearchLead;

    @Column(name="technical_designer")
    private String technicalDesigner;

    @Column(name="validation_lead")
    private String validationLead;

    @Column(name="data_team_lead")
    private String dataTeamLead;

    @Column(name="planned_migration_date")
    private Date plannedMigrationDate;

    @Column(name="actual_migration_date")
    private Date actualMigrationDate;

    @Column(name="prcf_number")
    private String prcfNumber;

    @Column(name="lm_action_items")
    private String lmActionItems;

}
