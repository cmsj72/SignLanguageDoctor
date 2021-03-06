package com.ssafy.db.repository;

import com.ssafy.db.entity.doctor.DoctorFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorFileRepository extends JpaRepository<DoctorFile, Long> {

    DoctorFile findByDoctorResumeId(int id);

    void deleteByDoctorResumeId(int id);
}
