package com.carddemo.auth.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorDetails> handleResourceNotFoundException(
            ResourceNotFoundException exception, WebRequest webRequest) {
        
        ErrorDetails errorDetails = new ErrorDetails(
                LocalDateTime.now(),
                exception.getMessage(),
                webRequest.getDescription(false),
                "RESOURCE_NOT_FOUND");
        
        return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
    }
    
    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<ErrorDetails> handleBadCredentialsException(
            BadCredentialsException exception, WebRequest webRequest) {
        
        ErrorDetails errorDetails = new ErrorDetails(
                LocalDateTime.now(),
                "Invalid username or password",
                webRequest.getDescription(false),
                "BAD_CREDENTIALS");
        
        return new ResponseEntity<>(errorDetails, HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Object> handleMethodArgumentNotValidException(
            MethodArgumentNotValidException exception, WebRequest webRequest) {
        
        Map<String, String> errors = new HashMap<>();
        exception.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        
        ValidationErrorDetails errorDetails = new ValidationErrorDetails(
                LocalDateTime.now(),
                "Validation Error",
                webRequest.getDescription(false),
                "VALIDATION_ERROR",
                errors);
        
        return new ResponseEntity<>(errorDetails, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorDetails> handleGlobalException(
            Exception exception, WebRequest webRequest) {
        
        ErrorDetails errorDetails = new ErrorDetails(
                LocalDateTime.now(),
                exception.getMessage(),
                webRequest.getDescription(false),
                "INTERNAL_SERVER_ERROR");
        
        return new ResponseEntity<>(errorDetails, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
    static class ErrorDetails {
        private final LocalDateTime timestamp;
        private final String message;
        private final String path;
        private final String errorCode;

        public ErrorDetails(LocalDateTime timestamp, String message, String path, String errorCode) {
            this.timestamp = timestamp;
            this.message = message;
            this.path = path;
            this.errorCode = errorCode;
        }

        public LocalDateTime getTimestamp() {
            return timestamp;
        }

        public String getMessage() {
            return message;
        }

        public String getPath() {
            return path;
        }

        public String getErrorCode() {
            return errorCode;
        }
    }
    
    static class ValidationErrorDetails extends ErrorDetails {
        private final Map<String, String> errors;

        public ValidationErrorDetails(LocalDateTime timestamp, String message, String path, String errorCode, Map<String, String> errors) {
            super(timestamp, message, path, errorCode);
            this.errors = errors;
        }

        public Map<String, String> getErrors() {
            return errors;
        }
    }
}