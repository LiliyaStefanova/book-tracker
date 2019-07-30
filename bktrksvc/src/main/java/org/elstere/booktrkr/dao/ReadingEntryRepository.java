package org.elstere.booktrkr.dao;

import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;
import java.util.UUID;

public interface ReadingEntryRepository extends PagingAndSortingRepository<ReadingEntry, UUID> {

    ReadingEntry findByTitleContains(String searchTerm);

    List<ReadingEntry> findAll();
}
