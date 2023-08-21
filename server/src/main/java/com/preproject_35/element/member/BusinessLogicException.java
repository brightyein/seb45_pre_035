package com.preproject_35.element.member;

import lombok.Getter;

public class BusinessLogicException extends RuntimeException{
    @Getter
    private ExceptionCodeMember exceptionCode;

    public BusinessLogicException(ExceptionCodeMember exceptionCode) {
        super(exceptionCode.getMessage());
        this.exceptionCode = exceptionCode;
    }
}
