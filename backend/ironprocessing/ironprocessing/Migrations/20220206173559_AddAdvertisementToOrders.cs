using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ironprocessing.Migrations
{
    public partial class AddAdvertisementToOrders : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Orders_AdvertisementId",
                table: "Orders",
                column: "AdvertisementId");

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_Advertisements_AdvertisementId",
                table: "Orders",
                column: "AdvertisementId",
                principalTable: "Advertisements",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orders_Advertisements_AdvertisementId",
                table: "Orders");

            migrationBuilder.DropIndex(
                name: "IX_Orders_AdvertisementId",
                table: "Orders");
        }
    }
}
