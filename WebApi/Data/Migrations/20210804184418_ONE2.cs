using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Data.Migrations
{
    public partial class ONE2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderDish_OrderDelivery_OrderDeliveryId",
                schema: "GoedEten",
                table: "OrderDish");

        

            migrationBuilder.AlterColumn<int>(
                name: "OrderDeliveryId",
                schema: "GoedEten",
                table: "OrderDish",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.UpdateData(
                schema: "GoedEten",
                table: "User",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt", "ResetCodeHash", "ResetCodeSalt" },
                values: new object[] { new byte[] { 223, 34, 169, 65, 217, 108, 19, 141, 234, 103, 120, 30, 44, 92, 210, 35, 35, 245, 21, 72, 40, 107, 2, 80, 112, 103, 253, 94, 13, 234, 49, 33, 205, 190, 84, 220, 153, 255, 42, 170, 67, 232, 219, 246, 227, 115, 33, 128, 220, 64, 3, 134, 195, 32, 137, 197, 108, 237, 174, 160, 120, 129, 71, 122 }, new byte[] { 237, 177, 151, 36, 140, 124, 43, 118, 159, 55, 243, 35, 44, 24, 4, 67, 67, 9, 68, 43, 139, 75, 165, 35, 179, 50, 45, 18, 245, 227, 10, 199, 70, 208, 151, 253, 100, 249, 180, 97, 148, 82, 11, 243, 5, 240, 217, 48, 123, 40, 109, 152, 219, 89, 139, 44, 130, 217, 205, 51, 206, 10, 239, 109, 110, 12, 61, 229, 12, 69, 129, 114, 153, 146, 220, 72, 150, 9, 108, 249, 229, 140, 23, 241, 97, 46, 193, 40, 115, 37, 108, 239, 244, 170, 121, 165, 54, 3, 178, 150, 124, 195, 163, 68, 250, 65, 95, 220, 196, 203, 102, 184, 255, 68, 30, 1, 90, 45, 19, 130, 126, 17, 200, 224, 126, 255, 130, 110 }, new byte[] { 61, 114, 33, 88, 225, 247, 4, 140, 19, 3, 99, 208, 136, 177, 122, 112, 35, 141, 73, 164, 235, 106, 168, 119, 54, 63, 56, 205, 169, 135, 224, 97, 217, 92, 235, 100, 196, 7, 246, 34, 211, 71, 11, 199, 92, 211, 11, 158, 234, 233, 112, 199, 72, 183, 217, 79, 226, 74, 112, 168, 245, 48, 8, 175 }, new byte[] { 241, 208, 122, 97, 18, 192, 86, 51, 103, 15, 60, 58, 138, 174, 144, 60, 140, 46, 196, 234, 157, 178, 194, 162, 26, 235, 231, 87, 186, 209, 169, 255, 54, 212, 78, 36, 130, 23, 124, 125, 51, 105, 245, 243, 239, 217, 174, 163, 131, 159, 242, 209, 192, 214, 123, 223, 90, 39, 152, 6, 172, 107, 187, 154, 229, 190, 24, 47, 154, 54, 240, 48, 210, 169, 145, 26, 135, 201, 62, 176, 2, 205, 126, 13, 240, 116, 28, 194, 208, 31, 135, 98, 149, 5, 37, 167, 228, 115, 28, 172, 213, 112, 86, 74, 210, 241, 99, 2, 97, 171, 211, 245, 86, 29, 134, 101, 117, 34, 209, 103, 251, 207, 233, 228, 33, 197, 116, 235 } });

            migrationBuilder.AddForeignKey(
                name: "FK_OrderDish_OrderDelivery_OrderDeliveryId",
                schema: "GoedEten",
                table: "OrderDish",
                column: "OrderDeliveryId",
                principalSchema: "GoedEten",
                principalTable: "OrderDelivery",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderDish_OrderDelivery_OrderDeliveryId",
                schema: "GoedEten",
                table: "OrderDish");

            migrationBuilder.RenameTable(
                name: "DishIngredient",
                schema: "GoedEten",
                newName: "DishIngredient");

            migrationBuilder.RenameTable(
                name: "AllergenDish",
                schema: "GoedEten",
                newName: "AllergenDish");

            migrationBuilder.AlterColumn<int>(
                name: "OrderDeliveryId",
                schema: "GoedEten",
                table: "OrderDish",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.UpdateData(
                schema: "GoedEten",
                table: "User",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt", "ResetCodeHash", "ResetCodeSalt" },
                values: new object[] { new byte[] { 208, 24, 55, 107, 203, 224, 0, 10, 52, 150, 11, 56, 178, 16, 75, 125, 45, 175, 154, 200, 30, 112, 131, 84, 2, 40, 53, 122, 69, 88, 199, 211, 197, 175, 235, 145, 167, 138, 204, 200, 39, 170, 82, 32, 98, 108, 226, 238, 208, 6, 115, 190, 42, 250, 165, 119, 235, 68, 33, 149, 226, 170, 106, 212 }, new byte[] { 238, 111, 213, 251, 55, 115, 124, 115, 115, 25, 203, 182, 95, 60, 1, 5, 104, 26, 11, 161, 109, 210, 129, 1, 165, 134, 207, 104, 25, 162, 55, 38, 91, 74, 240, 179, 42, 89, 10, 170, 231, 200, 157, 57, 140, 210, 168, 236, 165, 187, 168, 167, 191, 80, 102, 92, 33, 225, 166, 72, 253, 85, 66, 6, 214, 166, 3, 247, 49, 199, 115, 197, 116, 56, 39, 57, 31, 87, 20, 157, 210, 130, 98, 40, 158, 80, 56, 81, 234, 8, 132, 56, 244, 208, 231, 66, 188, 241, 30, 252, 58, 109, 102, 133, 60, 33, 109, 46, 106, 124, 132, 61, 10, 243, 145, 200, 40, 44, 185, 233, 15, 132, 18, 243, 109, 37, 39, 111 }, new byte[] { 40, 102, 231, 185, 55, 70, 98, 180, 160, 223, 31, 141, 164, 232, 85, 143, 177, 72, 58, 128, 181, 231, 157, 89, 88, 129, 59, 174, 245, 26, 234, 215, 149, 129, 199, 248, 76, 190, 33, 165, 164, 90, 196, 159, 50, 246, 239, 53, 174, 11, 84, 231, 26, 41, 95, 46, 87, 125, 162, 33, 127, 208, 160, 94 }, new byte[] { 92, 196, 224, 5, 53, 54, 228, 151, 109, 234, 69, 27, 84, 250, 136, 62, 229, 81, 14, 109, 78, 63, 80, 29, 53, 171, 52, 116, 182, 213, 153, 246, 178, 228, 71, 14, 128, 193, 58, 137, 154, 106, 188, 212, 154, 47, 88, 56, 114, 95, 82, 251, 24, 206, 183, 102, 198, 187, 1, 35, 200, 132, 228, 161, 100, 5, 128, 5, 15, 40, 8, 12, 172, 166, 4, 63, 183, 81, 188, 196, 43, 48, 52, 253, 143, 191, 119, 247, 5, 114, 185, 253, 66, 122, 97, 228, 97, 158, 210, 187, 157, 228, 215, 114, 116, 4, 249, 66, 223, 96, 61, 76, 2, 252, 11, 96, 221, 111, 87, 90, 102, 232, 74, 38, 97, 103, 166, 151 } });

            migrationBuilder.AddForeignKey(
                name: "FK_OrderDish_OrderDelivery_OrderDeliveryId",
                schema: "GoedEten",
                table: "OrderDish",
                column: "OrderDeliveryId",
                principalSchema: "GoedEten",
                principalTable: "OrderDelivery",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
