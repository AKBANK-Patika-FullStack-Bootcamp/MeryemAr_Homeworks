using System;
namespace SuperHeroAPI
{
    public class Paging
    {
        const int maxPageSize = 30;
        public int PageNumber { get; set; } = 1;

        private int pageSize = 2;
        public int PageSize
        {
            get
            {
               return _pageSize;
            }
            set
            {
                pageSize = (value > maxPageSize) ? maxPageSize : value;
            }
        }
    }
}