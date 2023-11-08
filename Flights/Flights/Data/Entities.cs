using Flights.Domain.Entities;
using System;
using Microsoft.EntityFrameworkCore;

namespace Flights.Data
{
    public class Entities: DbContext
    {
        public DbSet<Passenger> Passengers => Set<Passenger>();
        public DbSet<Flight> Flights => Set<Flight>();

        public Entities(DbContextOptions<Entities> options) : base(options) 
        {
                
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)

            //Making a primary key
        {
            modelBuilder.Entity<Passenger>().HasKey(p => p.Email);

            //Concurrency token - in this case: to make sure there is no double booking
            modelBuilder.Entity<Flight>().Property(p => p.RemainingNumberOfSeats).IsConcurrencyToken();

            //Adding Arrival and Departure to Db table
            modelBuilder.Entity<Flight>().OwnsOne(f => f.Departure);
            modelBuilder.Entity<Flight>().OwnsOne(f => f.Arrival);
        }

    }
}
