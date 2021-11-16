using System;

namespace CrossCuttingConcerns.Validations
{
    public class CustomValidation
    {
        public CustomValidation()
        {
        }

        public CustomValidation(bool isValid, string message = null, Exception exception = null)
        {
            IsValid = isValid;
            Message = message;
            Exception = exception;
        }

        public bool IsValid { get; set; }
        public string Message { get; set; }
        public Exception Exception { get; set; }
    }
}