import { connectdb } from "@/lib/config/db";
import Modelblog from "@/lib/models/Blogmodel";
import { writeFile, unlink } from 'fs/promises';
import path from 'path';
import { NextResponse } from "next/server";
import fs from 'fs';

const loadDB = async () => {
    await connectdb();
};
loadDB();

export async function GET(request) {
    const blogId = request.nextUrl.searchParams.get("id");
    if (blogId) {
        const blog = await Modelblog.findById(blogId);
        return NextResponse.json(blog);
    } else {
        const blogs = await Modelblog.find({});
        return NextResponse.json({ blogs });
    }
}

export async function POST(request) {
    try {
        const formData = await request.formData();
        const timestamp = Date.now();
        const image = formData.get('image');

        if (!image) {
            return NextResponse.json({ success: false, msg: "No image provided" }, { status: 400 });
        }

        console.log("Received form data:", Object.fromEntries(formData.entries()));

        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);

        // Define the uploads directory and ensure it exists
        const uploadsDir = path.join(process.cwd(), 'uploads');
        if (!fs.existsSync(uploadsDir)) {
            fs.mkdirSync(uploadsDir);
        }

        const imagePath = path.join(uploadsDir, `${timestamp}_${image.name}`);
        await writeFile(imagePath, buffer);

        // Create a URL to access the image
        const imgUrl = `/uploads/${timestamp}_${image.name}`;
        const blogData = {
            title: formData.get('title') || '',
            description: formData.get('description') || '',
            category: formData.get('category') || '',
            authorname: formData.get('authorname') || '',
            image: imgUrl,
        };

        if (!blogData.title || !blogData.description || !blogData.category || !blogData.authorname) {
            return NextResponse.json({ success: false, msg: "All fields are required" }, { status: 400 });
        }

        await Modelblog.create(blogData);
        console.log("Blog is saved");

        return NextResponse.json({ success: true, msg: "Blog is Added" });
    } catch (error) {
        console.error("Error adding blog:", error);
        return NextResponse.json({ success: false, msg: "Failed to add blog", error: error.message }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get('id');
        const blog = await Modelblog.findById(id);
        if (!blog) {
            return NextResponse.json({ msg: "Blog not found" }, { status: 404 });
        }

        // Remove the image file
        await unlink(path.join(process.cwd(), blog.image));

        // Delete the blog post
        await Modelblog.findByIdAndDelete(id);
        return NextResponse.json({ msg: "Blog has been deleted" });
    } catch (error) {
        console.error("Error deleting blog:", error);
        return NextResponse.json({ msg: "Failed to delete blog", error: error.message }, { status: 500 });
    }
}
