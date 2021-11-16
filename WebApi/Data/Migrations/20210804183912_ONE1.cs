﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Data.Migrations
{
    public partial class ONE1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DeliveryId",
                schema: "GoedEten",
                table: "OrderDish");

          

            migrationBuilder.UpdateData(
                schema: "GoedEten",
                table: "User",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt", "ResetCodeHash", "ResetCodeSalt" },
                values: new object[] { new byte[] { 208, 24, 55, 107, 203, 224, 0, 10, 52, 150, 11, 56, 178, 16, 75, 125, 45, 175, 154, 200, 30, 112, 131, 84, 2, 40, 53, 122, 69, 88, 199, 211, 197, 175, 235, 145, 167, 138, 204, 200, 39, 170, 82, 32, 98, 108, 226, 238, 208, 6, 115, 190, 42, 250, 165, 119, 235, 68, 33, 149, 226, 170, 106, 212 }, new byte[] { 238, 111, 213, 251, 55, 115, 124, 115, 115, 25, 203, 182, 95, 60, 1, 5, 104, 26, 11, 161, 109, 210, 129, 1, 165, 134, 207, 104, 25, 162, 55, 38, 91, 74, 240, 179, 42, 89, 10, 170, 231, 200, 157, 57, 140, 210, 168, 236, 165, 187, 168, 167, 191, 80, 102, 92, 33, 225, 166, 72, 253, 85, 66, 6, 214, 166, 3, 247, 49, 199, 115, 197, 116, 56, 39, 57, 31, 87, 20, 157, 210, 130, 98, 40, 158, 80, 56, 81, 234, 8, 132, 56, 244, 208, 231, 66, 188, 241, 30, 252, 58, 109, 102, 133, 60, 33, 109, 46, 106, 124, 132, 61, 10, 243, 145, 200, 40, 44, 185, 233, 15, 132, 18, 243, 109, 37, 39, 111 }, new byte[] { 40, 102, 231, 185, 55, 70, 98, 180, 160, 223, 31, 141, 164, 232, 85, 143, 177, 72, 58, 128, 181, 231, 157, 89, 88, 129, 59, 174, 245, 26, 234, 215, 149, 129, 199, 248, 76, 190, 33, 165, 164, 90, 196, 159, 50, 246, 239, 53, 174, 11, 84, 231, 26, 41, 95, 46, 87, 125, 162, 33, 127, 208, 160, 94 }, new byte[] { 92, 196, 224, 5, 53, 54, 228, 151, 109, 234, 69, 27, 84, 250, 136, 62, 229, 81, 14, 109, 78, 63, 80, 29, 53, 171, 52, 116, 182, 213, 153, 246, 178, 228, 71, 14, 128, 193, 58, 137, 154, 106, 188, 212, 154, 47, 88, 56, 114, 95, 82, 251, 24, 206, 183, 102, 198, 187, 1, 35, 200, 132, 228, 161, 100, 5, 128, 5, 15, 40, 8, 12, 172, 166, 4, 63, 183, 81, 188, 196, 43, 48, 52, 253, 143, 191, 119, 247, 5, 114, 185, 253, 66, 122, 97, 228, 97, 158, 210, 187, 157, 228, 215, 114, 116, 4, 249, 66, 223, 96, 61, 76, 2, 252, 11, 96, 221, 111, 87, 90, 102, 232, 74, 38, 97, 103, 166, 151 } });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameTable(
                name: "DishIngredient",
                schema: "GoedEten",
                newName: "DishIngredient");

            migrationBuilder.RenameTable(
                name: "AllergenDish",
                schema: "GoedEten",
                newName: "AllergenDish");

            migrationBuilder.AddColumn<int>(
                name: "DeliveryId",
                schema: "GoedEten",
                table: "OrderDish",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                schema: "GoedEten",
                table: "User",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "PasswordHash", "PasswordSalt", "ResetCodeHash", "ResetCodeSalt" },
                values: new object[] { new byte[] { 51, 248, 48, 20, 45, 54, 28, 147, 187, 111, 63, 64, 186, 117, 235, 57, 187, 32, 98, 79, 99, 156, 97, 159, 148, 184, 118, 158, 63, 54, 64, 230, 47, 194, 11, 145, 10, 166, 142, 216, 178, 232, 163, 90, 27, 127, 211, 25, 44, 3, 129, 13, 118, 253, 112, 170, 228, 180, 198, 51, 145, 187, 40, 11 }, new byte[] { 198, 190, 183, 146, 255, 130, 196, 15, 67, 5, 23, 46, 56, 61, 4, 63, 220, 237, 125, 247, 240, 47, 23, 171, 182, 153, 108, 146, 137, 224, 197, 7, 7, 5, 64, 5, 141, 2, 162, 227, 159, 224, 150, 68, 99, 46, 200, 79, 8, 236, 109, 99, 129, 141, 152, 244, 194, 15, 213, 3, 188, 249, 223, 145, 74, 70, 136, 31, 176, 110, 214, 98, 213, 173, 114, 108, 45, 60, 149, 50, 179, 190, 136, 243, 147, 57, 57, 194, 187, 174, 163, 104, 41, 176, 66, 46, 218, 243, 116, 182, 244, 126, 159, 200, 123, 90, 147, 201, 190, 137, 76, 233, 130, 62, 200, 25, 214, 82, 20, 164, 149, 246, 202, 121, 199, 108, 174, 27 }, new byte[] { 202, 64, 201, 112, 237, 117, 137, 138, 83, 45, 58, 206, 56, 43, 119, 35, 68, 71, 38, 32, 231, 152, 117, 156, 57, 93, 21, 62, 51, 15, 103, 51, 172, 126, 229, 33, 190, 190, 153, 70, 249, 72, 232, 255, 64, 210, 59, 145, 215, 106, 117, 49, 150, 225, 22, 252, 75, 222, 65, 180, 197, 191, 41, 190 }, new byte[] { 233, 70, 84, 121, 51, 221, 219, 211, 185, 120, 50, 116, 143, 34, 204, 122, 222, 183, 29, 250, 82, 125, 32, 12, 203, 144, 226, 254, 237, 178, 245, 7, 96, 200, 205, 93, 77, 95, 191, 37, 221, 227, 174, 123, 204, 236, 47, 24, 30, 62, 78, 56, 242, 90, 153, 152, 127, 78, 85, 115, 175, 253, 221, 113, 195, 122, 42, 118, 230, 161, 23, 10, 190, 136, 169, 149, 101, 229, 37, 161, 99, 249, 69, 35, 167, 97, 148, 254, 159, 154, 201, 212, 191, 210, 248, 84, 6, 30, 99, 194, 149, 202, 8, 90, 59, 86, 45, 158, 35, 131, 118, 39, 227, 47, 6, 76, 65, 139, 205, 184, 44, 9, 102, 34, 18, 210, 70, 22 } });
        }
    }
}
