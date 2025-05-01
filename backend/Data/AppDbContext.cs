using Microsoft.EntityFrameworkCore;
using JobApplicationTracker.Models;

namespace JobApplicationTracker.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Application> Applications { get; set; }
    }
}
