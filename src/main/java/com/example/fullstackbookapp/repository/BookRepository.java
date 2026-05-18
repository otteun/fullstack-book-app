package com.example.fullstackbookapp.repository;


import com.example.fullstackbookapp.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}